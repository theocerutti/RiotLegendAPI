import ChampionMastery from "./ChampionMastery";
import { ChampionMasteryTypes } from "../../../types/dto/riotapi/championmastery/ChampionMasteryDTO";
import { ChampionsTypes } from "../../../types/dto/ddragon/champions";
import DTO from "../DTO";
import { RegionName } from "../../../types/endpoints";
import RiotAPI from "../../../api/RiotAPI";
import { SummonerTypes } from "../../../types/dto/riotapi/summoner/summonerDTO";

class ChampionMasteryDTO extends DTO implements ChampionMasteryTypes.DTO {
    constructor(api: RiotAPI) {
        super(api);
    }

    async getByAccountID(
        accountID: SummonerTypes.AccountID,
        region?: RegionName
    ): Promise<Array<ChampionMastery>> {
        const regionReq = region || this.api.regionFallback.region;
        const championMasteries: Array<ChampionMasteryTypes.ChampionMasteryAPIResponse> =
            await this.api.riotRequest(
                region || this.api.regionFallback.region,
                ChampionMasteryTypes.RestEndpoint.getByAccountID,
                {
                    accountID,
                }
            );
        return championMasteries.map(
            (championMastery) =>
                new ChampionMastery(this.api, regionReq, championMastery)
        );
    }

    async getByChampion(
        accountID: SummonerTypes.AccountID,
        championID: ChampionsTypes.ChampionID,
        region?: RegionName
    ): Promise<ChampionMastery> {
        const regionReq = region || this.api.regionFallback.region;
        const championMastery: ChampionMasteryTypes.ChampionMasteryAPIResponse =
            await this.api.riotRequest(
                region || this.api.regionFallback.region,
                ChampionMasteryTypes.RestEndpoint.getByChampion,
                {
                    accountID,
                    championID,
                }
            );
        return new ChampionMastery(this.api, regionReq, championMastery);
    }

    async getTotalScore(
        accountID: SummonerTypes.AccountID,
        region?: RegionName
    ): Promise<number> {
        return this.api.riotRequest(
            region || this.api.regionFallback.region,
            ChampionMasteryTypes.RestEndpoint.getTotalScore,
            {
                accountID,
            }
        );
    }
}

export default ChampionMasteryDTO;
