import { AccessToken } from "../../../types/api";
import DTO from "../DTO";
import { RegionName } from "../../../types/endpoints";
import RiotAPI from "../../../api/RiotAPI";
import Summoner from "./Summoner";
import { SummonerTypes } from "../../../types/dto/riotapi/summoner/summonerDTO";

class SummonerDTO extends DTO implements SummonerTypes.DTO {
    constructor(api: RiotAPI) {
        super(api);
    }

    async getByAccountID(
        accountID: SummonerTypes.AccountID,
        region?: RegionName
    ): Promise<Summoner> {
        const reqRegion = region || this.api.regionFallback.region;
        const summoner: SummonerTypes.SummonerAPIResponse =
            await this.api.riotRequest(
                reqRegion,
                SummonerTypes.RestEndpoint.getByAccountID,
                { accountID }
            );
        return new Summoner(this.api, reqRegion, summoner);
    }

    async getByName(
        name: SummonerTypes.Name,
        region?: RegionName
    ): Promise<Summoner> {
        const reqRegion = region || this.api.regionFallback.region;
        const summoner: SummonerTypes.SummonerAPIResponse =
            await this.api.riotRequest(
                reqRegion,
                SummonerTypes.RestEndpoint.getByName,
                { name }
            );
        return new Summoner(this.api, reqRegion, summoner);
    }

    async getByPUUID(
        puuid: SummonerTypes.PUUID,
        region?: RegionName
    ): Promise<Summoner> {
        const reqRegion = region || this.api.regionFallback.region;
        const summoner: SummonerTypes.SummonerAPIResponse =
            await this.api.riotRequest(
                reqRegion,
                SummonerTypes.RestEndpoint.getByPUUID,
                { puuid }
            );
        return new Summoner(this.api, reqRegion, summoner);
    }

    async getByID(
        id: SummonerTypes.ID,
        region?: RegionName
    ): Promise<Summoner> {
        const reqRegion = region || this.api.regionFallback.region;
        const summoner: SummonerTypes.SummonerAPIResponse =
            await this.api.riotRequest(
                reqRegion,
                SummonerTypes.RestEndpoint.getByID,
                { id }
            );
        return new Summoner(this.api, reqRegion, summoner);
    }

    async getMe(
        accessToken: AccessToken,
        region?: RegionName
    ): Promise<Summoner> {
        const reqRegion = region || this.api.regionFallback.region;
        const summoner: SummonerTypes.SummonerAPIResponse =
            await this.api.riotRequest(
                reqRegion,
                SummonerTypes.RestEndpoint.getMe,
                {},
                { headers: { Authorization: `Bearer ${accessToken}` } }
            );
        return new Summoner(this.api, reqRegion, summoner);
    }
}

export default SummonerDTO;
