import Bottleneck from "bottleneck";
import { ClusterName, Endpoint, RegionName } from "../types/endpoints";

export const DDRAGON_API_URL: Endpoint = "https://ddragon.leagueoflegends.com";
export const RIOT_STATIC_ASSETS_URL: Endpoint =
    "http://static.developer.riotgames.com";
export const RIOT_API_URL: Endpoint = "api.riotgames.com";
export const RIOT_TOKEN_HEADER = "X-Riot-Token";

// 20req per 1second
// 100req per 2minutes
export const BOTTLENECK_LIMITER_DEFAULT_OPTIONS: Bottleneck.ConstructorOptions =
    {
        reservoir: 100,
        reservoirRefreshAmount: 100,
        reservoirRefreshInterval: 60 * 1000 * 2,
        maxConcurrent: 1,
        minTime: 50,
    };

export const clusterRegionMapper: {
    [key in ClusterName]: Array<RegionName>;
} = {
    americas: ["na1", "la1", "la2", "br1", "br", "na", "latam"],
    asia: ["kr", "jp1", "oc1", "tr1", "sea", "ap"],
    europe: ["euw1", "eun1", "ru", "eu"],
};
