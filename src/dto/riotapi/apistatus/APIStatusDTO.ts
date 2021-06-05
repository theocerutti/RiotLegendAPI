import { APIStatusTypes } from "../../../types/dto/riotapi/apistatus/APIStatusDTO";
import DTO from "../DTO";
import { RegionName } from "../../../types/endpoints";
import RiotAPI from "../../../api/RiotAPI";

class APIStatusDTO extends DTO implements APIStatusTypes.DTO {
    constructor(api: RiotAPI) {
        super(api);
    }

    async getStatus(
        region?: RegionName
    ): Promise<APIStatusTypes.PlatformDataDTO> {
        return this.api.riotRequest(
            region || this.api.regionFallback.region,
            APIStatusTypes.RestEndpoint.getStatus,
            {}
        );
    }
}

export default APIStatusDTO;
