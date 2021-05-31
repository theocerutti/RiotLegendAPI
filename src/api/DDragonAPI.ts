import { compile } from "path-to-regexp";
import { getChampionsDTO } from "../dto/ddragon/champions";
import {
    ConfigDDragonAPI,
    Locale,
    Realm,
    RegionFallback,
} from "../types/ddragon";
import { Champions } from "../types/dto/ddragon/champions";
import CachedAPI from "./CachedAPI";
import { DDRAGON_API_URL } from "../constants/constants";
import { RestEndpoint } from "../types/api";
import { Versions } from "../types/dto/ddragon/versions";
import { getVersionsDTO } from "../dto/ddragon/versions";

export const DEFAULT_REALM_FALLBACK: Realm = "euw";
export const DEFAULT_LOCALE_FALLBACK: Locale = "en_GB";

class DDragonAPI extends CachedAPI {
    private defaultRegionFallback: RegionFallback;

    readonly apiConfig: ConfigDDragonAPI;

    constructor(config?: ConfigDDragonAPI) {
        super(config?.cache);
        this.apiConfig = config;
        this.defaultRegionFallback = {
            realm: DEFAULT_REALM_FALLBACK,
            locale: DEFAULT_LOCALE_FALLBACK,
        };
    }

    get versions(): Versions.DTO {
        return getVersionsDTO(this);
    }

    get config(): ConfigDDragonAPI {
        return this.apiConfig;
    }

    get champions(): Champions.DTO {
        return getChampionsDTO(this);
    }

    get regionFallback(): RegionFallback {
        const fullFallback = this.defaultRegionFallback;
        Object.keys({
            ...this.defaultRegionFallback,
            ...this.apiConfig?.region,
        }).map((key) => {
            fullFallback[key] =
                this.apiConfig?.region?.[key] ||
                this.defaultRegionFallback[key];
            return null;
        });
        return fullFallback;
    }

    set regionFallback(fallback: RegionFallback) {
        this.defaultRegionFallback = fallback;
    }

    async ddragonRequest<T>(
        restEndpoint: RestEndpoint,
        restEndpointData?: { [key: string]: string | number }
    ): Promise<T> {
        const createPath = compile(restEndpoint.endpoint, {
            encode: encodeURIComponent,
        });

        const url = `${DDRAGON_API_URL}${createPath(restEndpointData)}`;
        return super.request(url, restEndpoint.method);
    }
}

export default DDragonAPI;
