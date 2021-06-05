import ChampionRotation from "./ChampionRotation";
import { ChampionRotationTypes } from "../../../types/dto/riotapi/championrotation/ChampionRotationDTO";
import DTO from "../DTO";
import { RegionName } from "../../../types/endpoints";
import RiotAPI from "../../../api/RiotAPI";

class ChampionRotationDTO extends DTO implements ChampionRotationTypes.DTO {
    constructor(api: RiotAPI) {
        super(api);
    }

    async getChampionRotations(region?: RegionName): Promise<ChampionRotation> {
        const reqRegion = region || this.api.regionFallback.region;
        const rotations: ChampionRotationTypes.ChampionRotationAPIResponse =
            await this.api.riotRequest(
                reqRegion,
                ChampionRotationTypes.RestEndpoint.getChampionRotations
            );
        return new ChampionRotation(this.api, region, rotations);
    }
}

export default ChampionRotationDTO;
