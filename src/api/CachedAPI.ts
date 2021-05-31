import { MemoryCache, RedisCache } from "../cache/cache";
import { RequestOptions, RestMethod } from "../types/api";
import { CacheConfig } from "../types/cachedapi";
import Redis from "ioredis";
import fetch from "node-fetch";
import { logger } from "../logger";

class CachedAPI {
    protected readonly cache?: MemoryCache | RedisCache;

    protected readonly cacheConfig?: CacheConfig;

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
            const cacheValue = (await this.cache.get(url)) as T | null;
            if (cacheValue) logger.info(`Cache: Hit ${key} ${url}`);
            return cacheValue;
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
            logger.info(`Cache: Setting ${key} ${url}`);
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

        const res = await fetch(url, {
            method,
            body: options?.body ? JSON.stringify(options.body) : undefined,
            headers: options?.headers,
        });
        const resData = res.json();
        await this.setCache(method, url, resData);
        return resData;
    }
}

export default CachedAPI;
