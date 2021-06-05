import ChampionMasteryToSummonerRelation from "./relations/ChampionMasteryToSummonerRelation";
import { ChampionMasteryTypes } from "../../../types/dto/riotapi/championmastery/championmasterydto";
import { ChampionsTypes } from "../../../types/dto/ddragon/champions";
import { RegionName } from "../../../types/endpoints";
import RiotAPI from "../../../api/RiotAPI";
import RiotBaseModel from "../RiotBaseModel";
import { SummonerTypes } from "../../../types/dto/riotapi/summoner/summonerdto";
import { UtilsTypes } from "../../../types/utils";

class ChampionMastery extends RiotBaseModel {
    private readonly summonerRelation: ChampionMasteryToSummonerRelation;

    constructor(
        api: RiotAPI,
        region: RegionName,
        championMastery: ChampionMasteryTypes.ChampionMasteryAPIResponse
    ) {
        super(api, region, championMastery);
        this.summonerRelation = new ChampionMasteryToSummonerRelation(
            api,
            this
        );
    }

    // getters

    get championPoints(): ChampionMasteryTypes.MasteryPoint {
        return this.data.championPoints;
    }

    get championPointsSinceLastLevel(): ChampionMasteryTypes.MasteryPoint {
        return this.data.championPointsSinceLastLevel;
    }

    get championPointsUntilNextLevel(): ChampionMasteryTypes.MasteryPoint {
        return this.data.championPointsUntilNextLevel;
    }

    get isChestGranted(): ChampionMasteryTypes.IsChestGranted {
        return this.data.chestGranted;
    }

    get championId(): ChampionsTypes.ChampionID {
        return this.data.championId;
    }

    get lastPlayTime(): UtilsTypes.UnixTimestamp {
        return this.data.lastPlayTime;
    }

    get championLevel(): ChampionMasteryTypes.MasteryLevel {
        return this.data.championLevel;
    }

    get summonerId(): SummonerTypes.ID {
        return this.data.summonerId;
    }

    get tokensEarned(): ChampionMasteryTypes.MasteryToken {
        return this.data.tokensEarned;
    }

    // relations

    get summoner(): ChampionMasteryToSummonerRelation {
        return this.summonerRelation;
    }

    // TODO: getChampion
}

export default ChampionMastery;
