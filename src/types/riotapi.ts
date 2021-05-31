import { CacheConfig } from "./cachedapi";
import { RegionFallback } from "./endpoints";

export type RiotToken = string;

export type RiotAPIConfig = {
    riotToken: RiotToken;
    cache?: CacheConfig;
    platform?: RegionFallback;
};
