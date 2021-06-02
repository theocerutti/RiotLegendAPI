import Minimap from "./minimap";
import { MinimapTypes } from "../../../types/dto/ddragon/minimaps";
import { VersionsTypes } from "../../../types/dto/ddragon/versions";

class Minimaps {
    private readonly minimapsRawData: MinimapTypes.APIResponse;

    private readonly allMinimaps: Array<Minimap>;

    constructor(
        minimapsData: MinimapTypes.APIResponse,
        version: VersionsTypes.GameVersion
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
