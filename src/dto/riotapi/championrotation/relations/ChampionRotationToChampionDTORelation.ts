import ChampionRotation from "../ChampionRotation";
import ChampionShard from "../../../ddragon/champion/championShard";
import ModelRelation from "../../ModelRelation";
import RiotAPI from "../../../../api/RiotAPI";

class ChampionRotationToChampionDTORelation extends ModelRelation<ChampionRotation> {
    constructor(api: RiotAPI, championRotation: ChampionRotation) {
        super(api, championRotation);
    }

    getFreeRotations(): Promise<Array<ChampionShard>> {
        return Promise.all(
            this.model.data.freeChampionIds.map((champID) =>
                this.api.dDragon.champions.getByChampionID(champID)
            )
        );
    }

    getFreeRotationsFreePlayer(): Promise<Array<ChampionShard>> {
        return Promise.all(
            this.model.data.freeChampionIdsForNewPlayers.map((champID) =>
                this.api.dDragon.champions.getByChampionID(champID)
            )
        );
    }
}

export default ChampionRotationToChampionDTORelation;
