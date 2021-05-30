import { IRiotAPI, RiotAPIConfig } from "./types/riotapi";
import { InvalidRiotApiConfig, NoCredentialsError } from "./errors";
import { MemoryCache, RedisCache } from "./cache";
import { RequestOptions, RestEndpoint } from "./types/api";
import { PlatformName } from "./types/endpoints";
import { RIOT_TOKEN_HEADER } from "./api";
import Redis from "ioredis";
import { Summoner } from "./types/summoner";
import { compile } from "path-to-regexp";
import fetch from "node-fetch";
import { getRiotAPIBaseURL } from "./api/utils/endpoint";
import { getSummonerDTO } from "./dto/summoner";
import { logger } from "./logger";

class RiotAPI implements IRiotAPI {
    private readonly apiConfig: RiotAPIConfig;

    private readonly cache?: MemoryCache | RedisCache;

    constructor(config: RiotAPIConfig) {
        if (!config) throw new InvalidRiotApiConfig();
        if (!config.riotToken) throw new NoCredentialsError();
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

    get config(): RiotAPIConfig {
        return this.apiConfig;
    }

    // DTOs accessors

    get summoner(): Summoner.DTO {
        return getSummonerDTO(this);
    }

    // UTILS

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

    async request<T>(
        platform: PlatformName,
        restEndpoint: RestEndpoint,
        restEndpointData?: { [key: string]: string | number },
        options?: RequestOptions
    ): Promise<T> {
        const createPath = compile(restEndpoint.endpoint, {
            encode: encodeURIComponent,
        });

        const url = `${getRiotAPIBaseURL(platform)}${createPath(
            restEndpointData
        )}`;

        const cacheValue = await this.checkCache<T>(restEndpoint.method, url);
        if (cacheValue) return cacheValue as T;

        const res = await fetch(url, {
            method: restEndpoint.method,
            body: options?.body ? JSON.stringify(options.body) : undefined,
            headers: {
                ...options?.headers,
                [RIOT_TOKEN_HEADER]: this.apiConfig.riotToken,
            },
        });
        const resData = res.json();
        await this.setCache(restEndpoint.method, url, resData);
        return resData;
    }
}

export default RiotAPI;
