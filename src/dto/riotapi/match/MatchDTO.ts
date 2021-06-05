import DTO from "../DTO";
import Match from "./Match";
import MatchTimeLine from "./MatchTimeLine";
import { MatchTypes } from "../../../types/dto/riotapi/match/MatchDTO";
import { PlatformName } from "../../../types/endpoints";
import RiotAPI from "../../../api/RiotAPI";
import { SummonerTypes } from "../../../types/dto/riotapi/summoner/summonerDTO";

class MatchDTO extends DTO implements MatchTypes.DTO {
    constructor(api: RiotAPI) {
        super(api);
    }

    async getMatchListIdsByPUUID(
        puuid: SummonerTypes.PUUID,
        platform?: PlatformName
    ): Promise<Array<MatchTypes.MatchID>> {
        const reqPlatform = platform || this.api.regionFallback.cluster;
        return this.api.riotRequest(
            reqPlatform,
            MatchTypes.RestEndpoint.getMatchListIdsByPUUID,
            { puuid }
        );
    }

    async getMatchListByPUUID(
        puuid: SummonerTypes.PUUID,
        platform?: PlatformName
    ): Promise<Array<Match>> {
        const matchIds = await this.getMatchListIdsByPUUID(puuid, platform);
        return Promise.all(
            matchIds.map((matchId) => this.getMatchByID(matchId, platform))
        );
    }

    async getMatchByID(
        matchId: MatchTypes.MatchID,
        platform?: PlatformName
    ): Promise<Match> {
        const reqPlatform = platform || this.api.regionFallback.cluster;
        const match: MatchTypes.Match = await this.api.riotRequest(
            reqPlatform,
            MatchTypes.RestEndpoint.getMatchByID,
            { matchId }
        );
        return new Match(this.api, platform, match);
    }

    async getMatchTimeLineByID(
        matchId: MatchTypes.MatchID,
        platform?: PlatformName
    ): Promise<MatchTimeLine> {
        const reqPlatform = platform || this.api.regionFallback.cluster;
        const matchTimeLine: MatchTypes.MatchTimeLine =
            await this.api.riotRequest(
                reqPlatform,
                MatchTypes.RestEndpoint.getMatchTimeLineByID,
                { matchId }
            );
        return new MatchTimeLine(this.api, platform, matchTimeLine);
    }
}

export default MatchDTO;
