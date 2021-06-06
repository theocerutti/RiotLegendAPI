import DDragonAPI from "../../../api/DDragonAPI";
import DTO from "../DTO";
import { VersionTypes } from "../../../types/dto/ddragon/version/versionDTO";

class VersionDTO extends DTO implements VersionTypes.DTO {
    constructor(api: DDragonAPI) {
        super(api);
    }

    async latest(): Promise<VersionTypes.GameVersion> {
        const versions: VersionTypes.GameVersions =
            await this.api.ddragonRequest(VersionTypes.RestEndpoint.all);
        return versions[0];
    }

    all(): Promise<VersionTypes.GameVersions> {
        return this.api.ddragonRequest(VersionTypes.RestEndpoint.all);
    }
}

export default VersionDTO;
