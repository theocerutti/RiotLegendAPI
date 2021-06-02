import { AccessToken } from "../../types/api";
import { RegionName } from "../../types/endpoints";
import RiotAPI from "../../api/RiotAPI";
import Summoner from "../../types/dto/riotapi/class/summoner";
import { SummonerTypes } from "../../types/dto/riotapi/summoner";

export const getSummonerDTO = (api: RiotAPI): SummonerTypes.DTO => ({
    getByAccountID: async (
        accountID: SummonerTypes.AccountID,
        region?: RegionName
    ): Promise<Summoner> => {
        const reqRegion = region || api.regionFallback.region;
        const summoner: SummonerTypes.Summoner = await api.riotRequest(
            reqRegion,
            SummonerTypes.RestEndpoint.getByAccountID,
            { accountID }
        );
        return new Summoner(summoner, api, reqRegion);
    },
    getByName: async (name: SummonerTypes.Name, region?: RegionName) => {
        const reqRegion = region || api.regionFallback.region;
        const summoner: SummonerTypes.Summoner = await api.riotRequest(
            reqRegion,
            SummonerTypes.RestEndpoint.getByName,
            { name }
        );
        return new Summoner(summoner, api, reqRegion);
    },
    getByPUUID: async (puuid: SummonerTypes.PUUID, region?: RegionName) => {
        const reqRegion = region || api.regionFallback.region;
        const summoner: SummonerTypes.Summoner = await api.riotRequest(
            reqRegion,
            SummonerTypes.RestEndpoint.getByPUUID,
            { puuid }
        );
        return new Summoner(summoner, api, reqRegion);
    },
    getByID: async (id: SummonerTypes.ID, region?: RegionName) => {
        const reqRegion = region || api.regionFallback.region;
        const summoner: SummonerTypes.Summoner = await api.riotRequest(
            reqRegion,
            SummonerTypes.RestEndpoint.getByID,
            { id }
        );
        return new Summoner(summoner, api, reqRegion);
    },
    getMe: async (accessToken: AccessToken, region?: RegionName) => {
        const reqRegion = region || api.regionFallback.region;
        const summoner: SummonerTypes.Summoner = await api.riotRequest(
            reqRegion,
            SummonerTypes.RestEndpoint.getMe,
            {},
            { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        return new Summoner(summoner, api, reqRegion);
    },
});
