import {
    ConfigDDragonAPI,
    Locale,
    Realm,
    RegionFallback,
} from "../types/ddragon";
import CachedAPI from "./CachedAPI";
import { ChampionsTypes } from "../types/dto/ddragon/champions";
import { DDRAGON_API_URL } from "../constants/constants";
import { ItemsTypes } from "../types/dto/ddragon/items";
import { ProfileIconsTypes } from "../types/dto/ddragon/profileicons";
import { RestEndpoint } from "../types/api";
import { SummonerSpellsTypes } from "../types/dto/ddragon/sumonnerspells";
import { VersionsTypes } from "../types/dto/ddragon/versions";
import { compile } from "path-to-regexp";
import { getChampionsDTO } from "../dto/ddragon/champions";
import { getItemsDTO } from "../dto/ddragon/items";
import { getProfileIconsDTO } from "../dto/ddragon/profileicons";
import { getSummonerSpellsDTO } from "../dto/ddragon/summonerspells";
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

    get versions(): VersionsTypes.DTO {
        return getVersionsDTO(this);
    }

    get config(): ConfigDDragonAPI {
        return this.apiConfig;
    }

    get champions(): ChampionsTypes.DTO {
        return getChampionsDTO(this);
    }

    get summonerSpells(): SummonerSpellsTypes.DTO {
        return getSummonerSpellsDTO(this);
    }

    get items(): ItemsTypes.DTO {
        return getItemsDTO(this);
    }

    get profileIcons(): ProfileIconsTypes.DTO {
        return getProfileIconsDTO(this);
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
