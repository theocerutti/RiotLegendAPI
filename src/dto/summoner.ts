import { AccessToken } from "../types/api";
import { RegionName } from "../types/endpoints";
import RiotAPI from "../RiotAPI";
import { Summoner } from "../types/summoner";

export const getSummonerDTO = (api: RiotAPI): Summoner.DTO => ({
    getByAccountID: (region: RegionName, accountID: Summoner.AccountID) =>
        api.request(region, Summoner.RestEndpoint.getByAccountID, {
            accountID,
        }),
    getByName: (region: RegionName, name: Summoner.Name) =>
        api.request(region, Summoner.RestEndpoint.getByName, { name }),
    getByPUUID: (region: RegionName, puuid: Summoner.PUUID) =>
        api.request(region, Summoner.RestEndpoint.getByPUUID, {
            puuid,
        }),
    getByID: (region: RegionName, id: Summoner.ID) =>
        api.request(region, Summoner.RestEndpoint.getByID, { id }),
    getMe: (region: RegionName, accessToken: AccessToken) =>
        api.request(
            region,
            Summoner.RestEndpoint.getMe,
            {},
            { headers: { Authorization: `Bearer ${accessToken}` } }
        ),
});
