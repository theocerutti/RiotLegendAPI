import { RegionName } from "../../../types/endpoints";
import RiotAPI from "../../../api/RiotAPI";
import RiotBaseModel from "../RiotBaseModel";
import SummonerToChampionMasteryDTORelation from "./relations/SummonerToChampionMasteryDTORelation";
import SummonerToProfileIconDTORelation from "./relations/SummonerToProfileIconDTORelation";
import { SummonerTypes } from "../../../types/dto/riotapi/summoner/summonerDTO";

class Summoner extends RiotBaseModel<SummonerTypes.SummonerAPIResponse> {
    private readonly championMasteryRelation: SummonerToChampionMasteryDTORelation;

    private readonly profileIconRelation: SummonerToProfileIconDTORelation;

    constructor(
        api: RiotAPI,
        region: RegionName,
        summoner: SummonerTypes.SummonerAPIResponse
    ) {
        super(api, { region }, summoner);
        this.championMasteryRelation = new SummonerToChampionMasteryDTORelation(
            api,
            this
        );
        this.profileIconRelation = new SummonerToProfileIconDTORelation(
            api,
            this
        );
    }

    // link relations

    get championMastery(): SummonerToChampionMasteryDTORelation {
        return this.championMasteryRelation;
    }

    get profileIcon(): SummonerToProfileIconDTORelation {
        return this.profileIconRelation;
    }
}

export default Summoner;
