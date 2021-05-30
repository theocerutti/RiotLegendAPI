import { IRiotAPI, RiotAPIConfig } from "./types/riotapi";
import { MemoryCache, RedisCache } from "./cache";
import { InvalidRiotApiConfig } from "./errors";
import { RIOT_TOKEN_HEADER } from "./api";
import Redis from "ioredis";
import { RestEndpoint } from "./types/api";
import { RoutingName } from "./types/endpoints";
import { Summoner } from "./types/summoner";
import { compile } from "path-to-regexp";
import fetch from "node-fetch";
import { getRiotAPIBaseURL } from "./api/utils/endpoint";
import { logger } from "./logger";

class RiotAPI implements IRiotAPI {
    private readonly apiConfig: RiotAPIConfig;

    readonly cache?: MemoryCache | RedisCache;

    // @ts-ignore
    private mySummoner: Summoner.Summoner;

    constructor(config: RiotAPIConfig) {
        if (!config) throw new InvalidRiotApiConfig();
        this.apiConfig = config;
        this.apiConfig.cache = config.cache || {
            cacheType: "local",
            expiration: 20000, // 20s
        };

        if (this.config.cache?.cacheType === "local") {
            this.cache = new MemoryCache();
        } else if (this.config.cache?.cacheType === "ioredis") {
            this.cache = new RedisCache(
                this.config.cache?.client as Redis.RedisOptions
            );
        }
    }

    async setAccount({
        username,
        puuid,
        accountId,
    }: {
        username?: Summoner.Name;
        puuid?: Summoner.PUUID;
        accountId?: Summoner.AccountID;
    }) {
        if (accountId) {
            this.mySummoner = await this.summoner.byAccountID(accountId);
        } else if (puuid) {
            this.mySummoner = await this.summoner.byPUUID(puuid);
        } else if (username) {
            this.mySummoner = await this.summoner.byName(username);
        }
        return this;
    }

    private async checkCache<T>(key: string, url: string): Promise<T | null> {
        if (this.cache && this.apiConfig.cache.expiration) {
            const cacheValue = (await this.cache.get(url)) as T | null;
            if (cacheValue) logger.info(`Cache: Hit ${key} ${url}`);
            return cacheValue;
        }
        return null;
    }

    private async setCache(
        key: string,
        url: string,
        data: object
    ): Promise<void> {
        if (this.cache && this.apiConfig.cache.expiration) {
            logger.info(`Cache: Setting ${key} ${url}`);
            await this.cache.set(url, data, this.apiConfig.cache.expiration);
        }
    }

    get me(): Summoner.Summoner {
        return this.mySummoner;
    }

    get summoner(): Summoner.DTO {
        return {
            byAccountID: (accountID) =>
                this.request(
                    this.apiConfig.routingName,
                    Summoner.RestEndpoint.byAccountID,
                    { accountID }
                ),
            byName: (name) =>
                this.request(
                    this.apiConfig.routingName,
                    Summoner.RestEndpoint.byName,
                    { name }
                ),
            byPUUID: (puuid) =>
                this.request(
                    this.apiConfig.routingName,
                    Summoner.RestEndpoint.byPUUID,
                    { puuid }
                ),
            byID: (id) =>
                this.request(
                    this.apiConfig.routingName,
                    Summoner.RestEndpoint.byPUUID,
                    { id }
                ),
        };
    }

    get config(): RiotAPIConfig {
        return this.apiConfig;
    }

    async request<T>(
        routingName: RoutingName,
        restEndpoint: RestEndpoint,
        restEndpointData?: { [key: string]: string | number }
    ): Promise<T> {
        const createPath = compile(restEndpoint.endpoint, {
            encode: encodeURIComponent,
        });

        const url = `${getRiotAPIBaseURL(
            this.apiConfig.routingName
        )}${createPath(restEndpointData)}`;

        const cacheValue = await this.checkCache<T>(restEndpoint.method, url);
        if (cacheValue) return cacheValue as T;

        const res = await fetch(url, {
            method: restEndpoint.method,
            headers: { [RIOT_TOKEN_HEADER]: this.apiConfig.riotToken },
        });
        const resData = res.json();
        await this.setCache(restEndpoint.method, url, resData);
        return resData;
    }
}

export default RiotAPI;
