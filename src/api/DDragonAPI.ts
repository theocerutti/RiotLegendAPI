import {
    ConfigDDragonAPI,
    Locale,
    Realm,
    RegionFallback,
} from "../types/ddragon";
import CachedAPI from "./CachedAPI";
import ChampionDTO from "../dto/ddragon/champion/championDTO";
import { DDRAGON_API_URL } from "../constants/constants";
import ItemDTO from "../dto/ddragon/item/itemDTO";
import { MinimapTypes } from "../types/dto/ddragon/minimaps";
import ProfileIconDTO from "../dto/ddragon/profileIcon/profileIconDTO";
import { RestEndpoint } from "../types/api";
import { SummonerSpellsTypes } from "../types/dto/ddragon/sumonnerspells";
import VersionDTO from "../dto/ddragon/version/versionDTO";
import { compile } from "path-to-regexp";
import { getMinimapsDTO } from "../dto/ddragon/minimaps";
import { getSummonerSpellsDTO } from "../dto/ddragon/summonerspells";

export const DEFAULT_REALM_FALLBACK: Realm = "euw";
export const DEFAULT_LOCALE_FALLBACK: Locale = "en_GB";

class DDragonAPI extends CachedAPI {
    private defaultRegionFallback: RegionFallback;

    readonly apiConfig: ConfigDDragonAPI;

    private readonly championDTO: ChampionDTO;

    private readonly versionDTO: VersionDTO;

    private readonly itemDTO: ItemDTO;

    private readonly profileIconDTO: ProfileIconDTO;

    constructor(config?: ConfigDDragonAPI) {
        super(config?.cache);
        this.apiConfig = config;
        this.defaultRegionFallback = {
            realm: DEFAULT_REALM_FALLBACK,
            locale: DEFAULT_LOCALE_FALLBACK,
        };

        this.championDTO = new ChampionDTO(this);
        this.versionDTO = new VersionDTO(this);
        this.itemDTO = new ItemDTO(this);
        this.profileIconDTO = new ProfileIconDTO(this);
    }

    get config(): ConfigDDragonAPI {
        return this.apiConfig;
    }

    get versions(): VersionDTO {
        return this.versionDTO;
    }

    get champions(): ChampionDTO {
        return this.championDTO;
    }

    get summonerSpells(): SummonerSpellsTypes.DTO {
        return getSummonerSpellsDTO(this);
    }

    get items(): ItemDTO {
        return this.itemDTO;
    }

    get profileIcons(): ProfileIconDTO {
        return this.profileIconDTO;
    }

    get minimaps(): MinimapTypes.DTO {
        return getMinimapsDTO(this);
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
        const createPath = compile(restEndpoint.repertory, {
            encode: encodeURIComponent,
        });

        const url = `${restEndpoint.baseUrl || DDRAGON_API_URL}${createPath(
            restEndpointData
        )}`;
        return super.request(url, restEndpoint.method);
    }
}

export default DDragonAPI;
