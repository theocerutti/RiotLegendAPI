import Redis from "ioredis";

export type CacheConfig = {
    cacheType: "local" | "ioredis";
    client?: Redis.RedisOptions | string;
    expiration?: number;
};
