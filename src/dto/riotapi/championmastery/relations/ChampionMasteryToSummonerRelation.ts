import ChampionMastery from "../ChampionMastery";
import ModelRelation from "../../ModelRelation";
import RiotAPI from "../../../../api/RiotAPI";
import Summoner from "../../summoner/Summoner";

class ChampionMasteryToSummonerRelation extends ModelRelation {
    constructor(api: RiotAPI, championMastery: ChampionMastery) {
        super(api, championMastery);
    }

    getSummoner(): Promise<Summoner> {
        return this.api.summoner.getByID(
            this.model.summonerId,
            this.model.associatedRegion
        );
    }
}

export default ChampionMasteryToSummonerRelation;
