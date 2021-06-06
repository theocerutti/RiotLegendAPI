import ChampionMastery from "../ChampionMastery";
import ModelRelation from "../../ModelRelation";
import RiotAPI from "../../../../api/RiotAPI";
import Summoner from "../../summoner/Summoner";

class ChampionMasteryToSummonerRelation extends ModelRelation<ChampionMastery> {
    constructor(api: RiotAPI, championMastery: ChampionMastery) {
        super(api, championMastery);
    }

    getSummoner(): Promise<Summoner> {
        return this.api.summoner.getByID(
            this.model.data.summonerId,
            this.model.region
        );
    }
}

export default ChampionMasteryToSummonerRelation;
