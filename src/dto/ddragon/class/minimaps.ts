import Minimap from "./minimap";
import { MinimapTypes } from "../../../types/dto/ddragon/minimaps";
import { VersionTypes } from "../../../types/dto/ddragon/version/versionDTO";

class Minimaps {
    private readonly minimapsRawData: MinimapTypes.APIResponse;

    private readonly allMinimaps: Array<Minimap>;

    constructor(
        minimapsData: MinimapTypes.APIResponse,
        version: VersionTypes.GameVersion
    ) {
        this.minimapsRawData = minimapsData;
        this.allMinimaps = this.minimapsRawData.map(
            (map) => new Minimap(map, version)
        );
    }

    get rawData(): MinimapTypes.APIResponse {
        return this.minimapsRawData;
    }

    get minimaps(): Array<Minimap> {
        return this.allMinimaps;
    }
}

export default Minimaps;
