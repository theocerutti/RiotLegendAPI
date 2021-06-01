import {
    ClusterName,
    PlatformName,
    RegionFallback,
    RegionName,
} from "../types/endpoints";
import { InvalidRiotApiConfig, NoCredentialsError } from "../errors";
import { RequestOptions, RestEndpoint } from "../types/api";
import CachedAPI from "./CachedAPI";
import DDragonAPI from "./DDragonAPI";
import { RIOT_TOKEN_HEADER } from "../constants/constants";
import { RiotAPIConfig } from "../types/riotapi";
import { Summoner } from "../types/dto/riotapi/summoner";
import { compile } from "path-to-regexp";
import { getRiotAPIBaseURL } from "./utils/endpoint";
import { getSummonerDTO } from "../dto/riotapi/summoner";

export const DEFAULT_REGION_FALLBACK: RegionName = "euw1";
export const DEFAULT_CLUSTER_FALLBACK: ClusterName = "europe";

class RiotAPI extends CachedAPI {
    private readonly dDragonApi: DDragonAPI;

    private readonly apiConfig: RiotAPIConfig;

    private defaultRegionFallback: RegionFallback;

    constructor(config: RiotAPIConfig) {
        if (!config) throw new InvalidRiotApiConfig();
        if (!config.riotToken) throw new NoCredentialsError();
        super(config.cache);
        this.defaultRegionFallback = {
            region: DEFAULT_REGION_FALLBACK,
            cluster: DEFAULT_CLUSTER_FALLBACK,
        };
        this.apiConfig = config;
        this.dDragonApi = new DDragonAPI({ cache: config.cache });
    }

    get dDragon(): DDragonAPI {
        return this.dDragonApi;
    }

    get config(): RiotAPIConfig {
        return this.apiConfig;
    }

    get regionFallback(): RegionFallback {
        const fullFallback = this.defaultRegionFallback;
        Object.keys({
            ...this.defaultRegionFallback,
            ...this.apiConfig?.platform,
        }).map((key) => {
            fullFallback[key] =
                this.apiConfig?.platform?.[key] ||
                this.defaultRegionFallback[key];
            return null;
        });
        return fullFallback;
    }

    set regionFallback(fallback: RegionFallback) {
        this.defaultRegionFallback = fallback;
    }

    // DTOs accessors
    get summoner(): Summoner.DTO {
        return getSummonerDTO(this);
    }

    // UTILS
    public async riotRequest<T>(
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

        return super.request(url, restEndpoint.method, {
            body: options?.body,
            headers: {
                ...options?.headers,
                [RIOT_TOKEN_HEADER]: this.apiConfig?.riotToken,
            },
        });
    }
}

export default RiotAPI;
