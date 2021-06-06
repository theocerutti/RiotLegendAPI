import DDragonAPI from "../../../api/DDragonAPI";
import DTO from "../DTO";
import { MinimapTypes } from "../../../types/dto/ddragon/minimap/minimaps";
import Minimaps from "./minimaps";

class MinimapDTO extends DTO implements MinimapTypes.DTO {
    constructor(api: DDragonAPI) {
        super(api);
    }

    async all(): Promise<Minimaps> {
        const latestVersion = await this.api.versions.latest();
        const res: MinimapTypes.APIResponse = await this.api.ddragonRequest(
            MinimapTypes.RestEndpoint.all,
            {
                version: latestVersion,
            }
        );
        return new Minimaps(this.api, "en_GB", latestVersion, res);
    }
}

export default MinimapDTO;
