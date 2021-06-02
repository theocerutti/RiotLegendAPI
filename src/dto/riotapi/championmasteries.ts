import { ChampionMasteriesTypes } from "../../types/dto/riotapi/championmasteries";
import { ChampionsTypes } from "../../types/dto/ddragon/champions";
import { RegionName } from "../../types/endpoints";
import RiotAPI from "../../api/RiotAPI";
import { SummonerTypes } from "../../types/dto/riotapi/summoner";

export const getChampionMasteriesDTO = (
    api: RiotAPI
): ChampionMasteriesTypes.DTO => ({
    getByAccountID: (
        accountID: SummonerTypes.AccountID,
        region?: RegionName
    ): Promise<Array<ChampionMasteriesTypes.ChampionMastery>> =>
        api.riotRequest(
            region || api.regionFallback.region,
            ChampionMasteriesTypes.RestEndpoint.getByAccountID,
            {
                accountID,
            }
        ),
    getByChampion: (
        accountID: SummonerTypes.AccountID,
        championID: ChampionsTypes.ChampionID,
        region?: RegionName
    ): Promise<ChampionMasteriesTypes.ChampionMastery> =>
        api.riotRequest(
            region || api.regionFallback.region,
            ChampionMasteriesTypes.RestEndpoint.getByChampion,
            {
                accountID,
                championID,
            }
        ),
    getTotalScore: (
        accountID: SummonerTypes.AccountID,
        region?: RegionName
    ): Promise<number> =>
        api.riotRequest(
            region || api.regionFallback.region,
            ChampionMasteriesTypes.RestEndpoint.getTotalScore,
            {
                accountID,
            }
        ),
});
