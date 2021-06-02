import { DDRAGON_API_URL } from "../../../constants/constants";
import { MinimapTypes } from "../../../types/dto/ddragon/minimaps";
import { VersionsTypes } from "../../../types/dto/ddragon/versions";

class Minimap {
    private readonly minimapData: MinimapTypes.Minimap;

    private readonly version: VersionsTypes.GameVersion;

    constructor(
        minimapData: MinimapTypes.Minimap,
        version: VersionsTypes.GameVersion
    ) {
        this.minimapData = minimapData;
        this.version = version;
    }

    get url() {
        return `${DDRAGON_API_URL}/cdn/${this.version}/img/map/map${this.minimapData.mapId}.png`;
    }

    get data() {
        return this.minimapData;
    }
}

export default Minimap;