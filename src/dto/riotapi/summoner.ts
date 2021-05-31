import { AccessToken } from "../../types/api";
import { RegionName } from "../../types/endpoints";
import RiotAPI from "../../api/RiotAPI";
import { Summoner } from "../../types/dto/riotapi/summoner";

export const getSummonerDTO = (api: RiotAPI): Summoner.DTO => ({
    getByAccountID: (region: RegionName, accountID: Summoner.AccountID) =>
        api.riotRequest(region, Summoner.RestEndpoint.getByAccountID, {
            accountID,
        }),
    getByName: (region: RegionName, name: Summoner.Name) =>
        api.riotRequest(region, Summoner.RestEndpoint.getByName, { name }),
    getByPUUID: (region: RegionName, puuid: Summoner.PUUID) =>
        api.riotRequest(region, Summoner.RestEndpoint.getByPUUID, {
            puuid,
        }),
    getByID: (region: RegionName, id: Summoner.ID) =>
        api.riotRequest(region, Summoner.RestEndpoint.getByID, { id }),
    getMe: (region: RegionName, accessToken: AccessToken) =>
        api.riotRequest(
            region,
            Summoner.RestEndpoint.getMe,
            {},
            { headers: { Authorization: `Bearer ${accessToken}` } }
        ),
});
