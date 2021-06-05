import Champion from "../../../ddragon/class/champion";
import ChampionRotation from "../ChampionRotation";
import ModelRelation from "../../ModelRelation";
import RiotAPI from "../../../../api/RiotAPI";

class ChampionRotationToChampionDTORelation extends ModelRelation {
    constructor(api: RiotAPI, championRotation: ChampionRotation) {
        super(api, championRotation);
    }

    getFreeRotations(): Promise<Array<Champion>> {
        return Promise.all(
            this.model.data.freeChampionIds.map((champID) =>
                this.api.dDragon.champions.getByChampionID(champID)
            )
        );
    }

    getFreeRotationsFreePlayer(): Promise<Array<Champion>> {
        return Promise.all(
            this.model.data.freeChampionIdsForNewPlayers.map((champID) =>
                this.api.dDragon.champions.getByChampionID(champID)
            )
        );
    }
}

export default ChampionRotationToChampionDTORelation;
