import ChampionRotationToChampionDTORelation from "./relations/ChampionRotationToChampionDTORelation";
import { ChampionRotationTypes } from "../../../types/dto/riotapi/championrotation/ChampionRotationDTO";
import { RegionName } from "../../../types/endpoints";
import RiotAPI from "../../../api/RiotAPI";
import RiotBaseModel from "../RiotBaseModel";

class ChampionRotation extends RiotBaseModel<ChampionRotationTypes.ChampionRotationAPIResponse> {
    private readonly championRelation: ChampionRotationToChampionDTORelation;

    constructor(
        api: RiotAPI,
        region: RegionName,
        championRotation: ChampionRotationTypes.ChampionRotationAPIResponse
    ) {
        super(api, { region }, championRotation);
        this.championRelation = new ChampionRotationToChampionDTORelation(
            api,
            this
        );
    }

    get champions(): ChampionRotationToChampionDTORelation {
        return this.championRelation;
    }
}

export default ChampionRotation;
