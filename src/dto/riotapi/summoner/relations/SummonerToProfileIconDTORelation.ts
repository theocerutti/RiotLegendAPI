import ModelRelation from "../../ModelRelation";
import ProfileIcon from "../../../ddragon/profileIcon/profileIcon";
import RiotAPI from "../../../../api/RiotAPI";
import Summoner from "../Summoner";

class SummonerToChampionMasteryDTORelation extends ModelRelation<Summoner> {
    constructor(api: RiotAPI, summoner: Summoner) {
        super(api, summoner);
    }

    async getProfileIcon(): Promise<ProfileIcon> {
        const icons = await this.api.dDragon.profileIcons.all();
        return icons.getByID(this.model.data.profileIconId);
    }
}

export default SummonerToChampionMasteryDTORelation;
