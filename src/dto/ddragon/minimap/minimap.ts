import { DDRAGON_API_URL } from "../../../constants/constants";
import DDragonAPI from "../../../api/DDragonAPI";
import DDragonBaseModel from "../DDragonBaseModel";
import { Locale } from "../../../types/ddragon";
import { MinimapTypes } from "../../../types/dto/ddragon/minimap/minimaps";
import { VersionTypes } from "../../../types/dto/ddragon/version/versionDTO";

class Minimap extends DDragonBaseModel<MinimapTypes.Minimap> {
    constructor(
        api: DDragonAPI,
        locale: Locale,
        version: VersionTypes.GameVersion,
        map: MinimapTypes.Minimap
    ) {
        super(api, locale, version, map);
    }

    get url(): string {
        return `${DDRAGON_API_URL}/cdn/${this.version}/img/map/map${this.data.mapId}.png`;
    }
}

export default Minimap;
