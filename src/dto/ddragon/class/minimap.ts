import { DDRAGON_API_URL } from "../../../constants/constants";
import { MinimapTypes } from "../../../types/dto/ddragon/minimaps";
import { VersionTypes } from "../../../types/dto/ddragon/version/versionDTO";

class Minimap {
    private readonly minimapData: MinimapTypes.Minimap;

    private readonly version: VersionTypes.GameVersion;

    constructor(
        minimapData: MinimapTypes.Minimap,
        version: VersionTypes.GameVersion
    ) {
        this.minimapData = minimapData;
        this.version = version;
    }

    get url(): string {
        return `${DDRAGON_API_URL}/cdn/${this.version}/img/map/map${this.minimapData.mapId}.png`;
    }

    get data() {
        return this.minimapData;
    }
}

export default Minimap;
