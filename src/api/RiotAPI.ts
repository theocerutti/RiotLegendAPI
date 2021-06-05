import {
    ClusterName,
    PlatformName,
    RegionFallback,
    RegionName,
} from "../types/endpoints";
import { InvalidRiotApiConfig, NoCredentialsError } from "../errors";
import { RequestOptions, RestEndpoint } from "../types/api";
import APIStatusDTO from "../dto/riotapi/apistatus/APIStatusDTO";
import CachedAPI from "./CachedAPI";
import ChampionMasteryDTO from "../dto/riotapi/championmastery/ChampionMasteryDTO";
import ChampionRotationDTO from "../dto/riotapi/championrotation/ChampionRotationDTO";
import DDragonAPI from "./DDragonAPI";
import MatchDTO from "../dto/riotapi/match/MatchDTO";
import { RIOT_TOKEN_HEADER } from "../constants/constants";
import { RiotAPIConfig } from "../types/riotapi";
import SummonerDTO from "../dto/riotapi/summoner/SummonerDTO";
import { compile } from "path-to-regexp";
import { getRiotAPIBaseURL } from "./utils/endpoint";

export const DEFAULT_REGION_FALLBACK: RegionName = "euw1";
export const DEFAULT_CLUSTER_FALLBACK: ClusterName = "europe";

class RiotAPI extends CachedAPI {
    private readonly dDragonApi: DDragonAPI;

    private readonly apiConfig: RiotAPIConfig;

    private defaultRegionFallback: RegionFallback;

    private readonly summonerDTO: SummonerDTO;

    private readonly championMasteryDTO: ChampionMasteryDTO;

    private readonly championRotationDTO: ChampionRotationDTO;

    private readonly apiStatusDTO: APIStatusDTO;

    private readonly matchDTO: MatchDTO;

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

        // DTOs
        this.summonerDTO = new SummonerDTO(this);
        this.championMasteryDTO = new ChampionMasteryDTO(this);
        this.championRotationDTO = new ChampionRotationDTO(this);
        this.apiStatusDTO = new APIStatusDTO(this);
        this.matchDTO = new MatchDTO(this);
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
    get summoner(): SummonerDTO {
        return this.summonerDTO;
    }

    get championMastery(): ChampionMasteryDTO {
        return this.championMasteryDTO;
    }

    get championRotation(): ChampionRotationDTO {
        return this.championRotationDTO;
    }

    get apiStatus(): APIStatusDTO {
        return this.apiStatusDTO;
    }

    get match(): MatchDTO {
        return this.matchDTO;
    }

    // UTILS
    public async riotRequest<T>(
        platform: PlatformName,
        restEndpoint: RestEndpoint,
        restEndpointData?: { [key: string]: string | number },
        options?: RequestOptions
    ): Promise<T> {
        const createPath = compile(restEndpoint.repertory, {
            encode: encodeURIComponent,
        });

        const url = `${
            restEndpoint.baseUrl || getRiotAPIBaseURL(platform)
        }${createPath(restEndpointData)}`;

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
