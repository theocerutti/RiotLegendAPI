import { RegionName } from "../../../types/endpoints";
import RiotAPI from "../../../api/RiotAPI";
import RiotBaseModel from "../RiotBaseModel";
import SummonerToChampionMasteryDTORelation from "./relations/SummonerToChampionMasteryDTORelation";
import { SummonerTypes } from "../../../types/dto/riotapi/summoner/summonerDTO";

class Summoner extends RiotBaseModel<SummonerTypes.SummonerAPIResponse> {
    private readonly championMasteryRelation: SummonerToChampionMasteryDTORelation;

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
    }

    // link relations

    get championMastery(): SummonerToChampionMasteryDTORelation {
        return this.championMasteryRelation;
    }

    // TODO: getProfileIcon
}

export default Summoner;
