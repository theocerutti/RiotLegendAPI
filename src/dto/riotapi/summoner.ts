import { AccessToken } from "../../types/api";
import { RegionName } from "../../types/endpoints";
import RiotAPI from "../../api/RiotAPI";
import { Summoner } from "../../types/dto/riotapi/summoner";

export const getSummonerDTO = (api: RiotAPI): Summoner.DTO => ({
    getByAccountID: (accountID: Summoner.AccountID, region?: RegionName) =>
        api.riotRequest(
            region || api.regionFallback.region,
            Summoner.RestEndpoint.getByAccountID,
            {
                accountID,
            }
        ),
    getByName: (name: Summoner.Name, region?: RegionName) =>
        api.riotRequest(
            region || api.regionFallback.region,
            Summoner.RestEndpoint.getByName,
            { name }
        ),
    getByPUUID: (puuid: Summoner.PUUID, region?: RegionName) =>
        api.riotRequest(
            region || api.regionFallback.region,
            Summoner.RestEndpoint.getByPUUID,
            {
                puuid,
            }
        ),
    getByID: (id: Summoner.ID, region?: RegionName) =>
        api.riotRequest(
            region || api.regionFallback.region,
            Summoner.RestEndpoint.getByID,
            { id }
        ),
    getMe: (accessToken: AccessToken, region?: RegionName) =>
        api.riotRequest(
            region || api.regionFallback.region,
            Summoner.RestEndpoint.getMe,
            {},
            { headers: { Authorization: `Bearer ${accessToken}` } }
        ),
});
