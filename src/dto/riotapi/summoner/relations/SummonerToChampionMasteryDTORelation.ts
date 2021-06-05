import ChampionMastery from "../../championmastery/ChampionMastery";
import { ChampionsTypes } from "../../../../types/dto/ddragon/champions";
import ModelRelation from "../../ModelRelation";
import RiotAPI from "../../../../api/RiotAPI";
import Summoner from "../Summoner";

class SummonerToChampionMasteryDTORelation extends ModelRelation {
    constructor(api: RiotAPI, summoner: Summoner) {
        super(api, summoner);
    }

    getAll(): Promise<Array<ChampionMastery>> {
        return this.api.championMastery.getByAccountID(
            this.model.id,
            this.model.associatedRegion
        );
    }

    getByChampion(
        championID: ChampionsTypes.ChampionID
    ): Promise<ChampionMastery> {
        return this.api.championMastery.getByChampion(
            this.model.id,
            championID,
            this.model.associatedRegion
        );
    }

    getTotalScore(): Promise<number> {
        return this.api.championMastery.getTotalScore(
            this.model.id,
            this.model.associatedRegion
        );
    }
}

export default SummonerToChampionMasteryDTORelation;
