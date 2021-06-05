import { RegionName } from "../../../types/endpoints";
import RiotAPI from "../../../api/RiotAPI";
import RiotBaseModel from "../RiotBaseModel";
import SummonerToChampionMasteryDTORelation from "./relations/SummonerToChampionMasteryDTORelation";
import { SummonerTypes } from "../../../types/dto/riotapi/summoner/summonerdto";

class Summoner extends RiotBaseModel {
    private readonly championMasteryRelation: SummonerToChampionMasteryDTORelation;

    constructor(
        api: RiotAPI,
        region: RegionName,
        summoner: SummonerTypes.SummonerAPIResponse
    ) {
        super(api, region, summoner);
        this.championMasteryRelation = new SummonerToChampionMasteryDTORelation(
            api,
            this
        );
    }

    // getters

    get id(): SummonerTypes.ID {
        return this.data.id;
    }

    get accountId(): SummonerTypes.AccountID {
        return this.data.accountId;
    }

    get puuid(): SummonerTypes.PUUID {
        return this.data.puuid;
    }

    get name(): SummonerTypes.Name {
        return this.data.name;
    }

    get profileIconId(): SummonerTypes.ProfileIconID {
        return this.data.profileIconId;
    }

    get revisionDate(): SummonerTypes.RevisionDate {
        return this.data.revisionDate;
    }

    get summonerLevel(): SummonerTypes.SummonerLevel {
        return this.data.summonerLevel;
    }

    // link relations

    get championMastery(): SummonerToChampionMasteryDTORelation {
        return this.championMasteryRelation;
    }

    // TODO: getProfileIcon
}

export default Summoner;
