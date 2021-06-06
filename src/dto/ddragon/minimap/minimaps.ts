import DDragonAPI from "../../../api/DDragonAPI";
import DDragonBaseModel from "../DDragonBaseModel";
import { Locale } from "../../../types/ddragon";
import Minimap from "./minimap";
import { MinimapTypes } from "../../../types/dto/ddragon/minimap/minimaps";
import { VersionTypes } from "../../../types/dto/ddragon/version/versionDTO";

class Minimaps extends DDragonBaseModel<MinimapTypes.APIResponse> {
    private readonly allMinimaps: Array<Minimap>;

    constructor(
        api: DDragonAPI,
        locale: Locale,
        version: VersionTypes.GameVersion,
        minimapsData: MinimapTypes.APIResponse
    ) {
        super(api, locale, version, minimapsData);
        this.allMinimaps = this.data.map(
            (map) => new Minimap(api, locale, version, map)
        );
    }

    get minimaps(): Array<Minimap> {
        return this.allMinimaps;
    }
}

export default Minimaps;
