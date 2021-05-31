import { GameVersion, GameVersions, Locale, Realm } from "../types/ddragon";
import { CacheConfig } from "../types/cachedapi";
import CachedAPI from "./CachedAPI";
import { DDRAGON_API_URL } from "../constants/constants";
import { RestEndpoint } from "../types/api";
import { Versions } from "../types/dto/ddragon/versions";
import { getVersionsDTO } from "../dto/ddragon/versions";

class DDragonAPI extends CachedAPI {
    readonly version: GameVersions;

    readonly latestVersion: GameVersion;

    readonly locale: Locale = "en_GB";

    readonly realm: Realm = "euw";

    constructor(config?: CacheConfig) {
        super(config);
    }

    get versions(): Versions.DTO {
        return getVersionsDTO(this);
    }

    async ddragonRequest<T>(restEndpoint: RestEndpoint): Promise<T> {
        const url = `${DDRAGON_API_URL}${restEndpoint.endpoint}`;
        return super.request(url, restEndpoint.method);
    }
}

export default DDragonAPI;
