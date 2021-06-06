import ChampionMastery from "../../championmastery/ChampionMastery";
import { ChampionTypes } from "../../../../types/dto/ddragon/champion/championDTO";
import ModelRelation from "../../ModelRelation";
import RiotAPI from "../../../../api/RiotAPI";
import Summoner from "../Summoner";

class SummonerToChampionMasteryDTORelation extends ModelRelation<Summoner> {
    constructor(api: RiotAPI, summoner: Summoner) {
        super(api, summoner);
    }

    getAll(): Promise<Array<ChampionMastery>> {
        return this.api.championMastery.getByAccountID(
            this.model.data.id,
            this.model.region
        );
    }

    getByChampion(
        championID: ChampionTypes.ChampionID
    ): Promise<ChampionMastery> {
        return this.api.championMastery.getByChampion(
            this.model.data.id,
            championID,
            this.model.region
        );
    }

    getTotalScore(): Promise<number> {
        return this.api.championMastery.getTotalScore(
            this.model.data.id,
            this.model.region
        );
    }
}

export default SummonerToChampionMasteryDTORelation;
