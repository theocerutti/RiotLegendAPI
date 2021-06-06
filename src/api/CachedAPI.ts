import Bottleneck from "bottleneck";
import { MemoryCache, RedisCache } from "../cache/cache";
import { RequestOptions, RestMethod } from "../types/api";
import { CacheConfig } from "../types/cachedapi";
import Redis from "ioredis";
import fetch from "node-fetch";

class CachedAPI {
    protected readonly cache?: MemoryCache | RedisCache;

    protected readonly cacheConfig?: CacheConfig;

    private readonly requestLimiter: Bottleneck;

    constructor(config: CacheConfig) {
        if (!config) {
            this.cacheConfig = {
                cacheType: "local",
                expiration: 20000, // 20s
            };
        } else {
            this.cacheConfig = config;
        }
        if (this.cacheConfig.cacheType === "local") {
            this.cache = new MemoryCache();
        } else if (this.cacheConfig.cacheType === "ioredis") {
            this.cache = new RedisCache(config.client as Redis.RedisOptions);
        }

        this.requestLimiter = new Bottleneck({
            reservoir: 100, // initial value
            reservoirRefreshAmount: 100,
            reservoirRefreshInterval: 60 * 1000 * 2, // 2minutes / must be divisible by 250

            // also use maxConcurrent and/or minTime for safety
            maxConcurrent: 1,
            minTime: 50, // pick a value that makes sense for your use case
        });
    }

    public get getCacheConfig(): CacheConfig {
        return this.cacheConfig;
    }

    protected async checkCache<T>(
        key: string,
        url: string,
        expirationMs?: number
    ): Promise<T | null> {
        if (this.cache && expirationMs) {
            return (await this.cache.get(url)) as T | null;
        }
        return null;
    }

    protected async setCache(
        key: string,
        url: string,
        data: object,
        expirationMs?: number
    ): Promise<void> {
        if (this.cache && expirationMs) {
            await this.cache.set(url, data, expirationMs);
        }
    }

    protected async request<T>(
        url,
        method: RestMethod,
        options?: RequestOptions
    ): Promise<T> {
        const cacheValue = await this.checkCache<T>(method, url);
        if (cacheValue) return cacheValue as T;

        const res = await this.requestLimiter.schedule(async () =>
            fetch(url, {
                method,
                body: options?.body ? JSON.stringify(options.body) : undefined,
                headers: options?.headers,
            })
        );
        const resData = res.json();
        await this.setCache(method, url, resData);
        return resData;
    }
}

export default CachedAPI;
