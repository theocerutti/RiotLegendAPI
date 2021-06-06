import { ClusterName, Endpoint, RegionName } from "../types/endpoints";
import Bottleneck from "bottleneck";

export const DDRAGON_API_URL: Endpoint = "https://ddragon.leagueoflegends.com";
export const RIOT_STATIC_ASSETS_URL: Endpoint =
    "http://static.developer.riotgames.com";
export const RIOT_API_URL: Endpoint = "api.riotgames.com";
export const RIOT_TOKEN_HEADER = "X-Riot-Token";

// 20req per 1second
// 100req per 2minutes
// Add delay for security
export const BOTTLENECK_LIMITER_DEFAULT_OPTIONS: Bottleneck.ConstructorOptions =
    {
        reservoir: 100 /* 100req */ - 10 /* -10req for security */,
        reservoirRefreshAmount: 100 /* 100req */ - 10 /* -10req for security */,
        reservoirRefreshInterval:
            60 * 1000 * 2 /* 120sec */ + /* 20sec for security */ 20 * 1000,
        maxConcurrent: 1,
        minTime: 50 /* 20req per 1sec */ + 20 /* 20ms per req for security */,
    };

export const clusterRegionMapper: {
    [key in ClusterName]: Array<RegionName>;
} = {
    americas: ["na1", "la1", "la2", "br1", "br", "na", "latam"],
    asia: ["kr", "jp1", "oc1", "tr1", "sea", "ap"],
    europe: ["euw1", "eun1", "ru", "eu"],
};
