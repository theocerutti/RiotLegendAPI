import Redis from "ioredis";

export class RedisCache {
    readonly client: Redis.Redis;

    readonly keyPrefix: string = "fm-riot-api-";

    constructor(redisClientOpts: Redis.RedisOptions | string) {
        this.client = new Redis(redisClientOpts as Redis.RedisOptions);
    }

    async get<T>(key: string): Promise<T | null> {
        const payload = await this.client.get(this.keyPrefix + key);
        return payload ? JSON.parse(payload) : null;
    }

    async set(key: string, value: object, expiration: number): Promise<string> {
        return this.client.setex(
            this.keyPrefix + key,
            expiration / 1000,
            JSON.stringify(value)
        );
    }

    async flush(): Promise<string> {
        return this.client.flushdb();
    }
}

export class MemoryCache {
    cache: { [key: string]: { expires: number; value: object } };

    constructor() {
        this.cache = {};
    }

    async get<T>(key: string): Promise<T | null> {
        if (!this.cache[key]) return null;
        if (Date.now() > this.cache[key].expires) {
            delete this.cache[key];
            return null;
        }
        return this.cache[key].value as any;
    }

    async set(key: string, value: object, expiration: number): Promise<"OK"> {
        this.cache[key] = {
            expires: expiration ? Date.now() + expiration : 0,
            value,
        };
        return "OK";
    }

    async flush(): Promise<string> {
        this.cache = {};
        return "OK";
    }
}
