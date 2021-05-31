import { CacheConfig } from "./cachedapi";

export type RiotToken = string;

export type RiotAPIConfig = {
    riotToken: RiotToken;
    cache?: CacheConfig;
};
