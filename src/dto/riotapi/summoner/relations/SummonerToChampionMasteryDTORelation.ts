import ChampionMastery from "../../championmastery/ChampionMastery";
import { ChampionsTypes } from "../../../../types/dto/ddragon/champions";
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
        championID: ChampionsTypes.ChampionID
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
