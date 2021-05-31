import { InvalidRiotApiConfig, NoCredentialsError } from "../errors";
import { RequestOptions, RestEndpoint } from "../types/api";
import CachedAPI from "./CachedAPI";
import DDragonAPI from "./DDragonAPI";
import { PlatformName } from "../types/endpoints";
import { RIOT_TOKEN_HEADER } from "../constants/constants";
import { RiotAPIConfig } from "../types/riotapi";
import { Summoner } from "../types/dto/riotapi/summoner";
import { compile } from "path-to-regexp";
import { getRiotAPIBaseURL } from "./utils/endpoint";
import { getSummonerDTO } from "../dto/riotapi/summoner";

class RiotAPI extends CachedAPI {
    private readonly dDragonApi: DDragonAPI;

    private readonly config: RiotAPIConfig;

    constructor(config: RiotAPIConfig) {
        if (!config) throw new InvalidRiotApiConfig();
        if (!config.riotToken) throw new NoCredentialsError();
        super(config.cache);
        this.config = config;
        this.dDragonApi = new DDragonAPI(config.cache);
    }

    get dDragon(): DDragonAPI {
        return this.dDragonApi;
    }

    get getConfig(): RiotAPIConfig {
        return this.config;
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
                [RIOT_TOKEN_HEADER]: this.config.riotToken,
            },
        });
    }
}

export default RiotAPI;
