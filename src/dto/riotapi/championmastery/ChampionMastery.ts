import ChampionMasteryToSummonerRelation from "./relations/ChampionMasteryToSummonerRelation";
import { ChampionMasteryTypes } from "../../../types/dto/riotapi/championmastery/ChampionMasteryDTO";
import { RegionName } from "../../../types/endpoints";
import RiotAPI from "../../../api/RiotAPI";
import RiotBaseModel from "../RiotBaseModel";

class ChampionMastery extends RiotBaseModel<ChampionMasteryTypes.ChampionMasteryAPIResponse> {
    private readonly summonerRelation: ChampionMasteryToSummonerRelation;

    constructor(
        api: RiotAPI,
        region: RegionName,
        championMastery: ChampionMasteryTypes.ChampionMasteryAPIResponse
    ) {
        super(api, { region }, championMastery);
        this.summonerRelation = new ChampionMasteryToSummonerRelation(
            api,
            this
        );
    }

    // relations

    get summoner(): ChampionMasteryToSummonerRelation {
        return this.summonerRelation;
    }

    // TODO: getChampion
}

export default ChampionMastery;
