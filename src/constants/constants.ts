import { ClusterName, Endpoint, RegionName } from "../types/endpoints";

export const DDRAGON_API_URL: Endpoint = "https://ddragon.leagueoflegends.com";
export const RIOT_STATIC_ASSETS_URL: Endpoint =
    "http://static.developer.riotgames.com";
export const RIOT_API_URL: Endpoint = "api.riotgames.com";
export const RIOT_TOKEN_HEADER = "X-Riot-Token";

export const clusterRegionMapper: {
    [key in ClusterName]: Array<RegionName>;
} = {
    americas: ["na1", "la1", "la2", "br1", "br", "na", "latam"],
    asia: ["kr", "jp1", "oc1", "tr1", "sea", "ap"],
    europe: ["euw1", "eun1", "ru", "eu"],
};
