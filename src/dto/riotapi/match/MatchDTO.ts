import { ClusterName } from "../../../types/endpoints";
import DTO from "../DTO";
import Match from "./Match";
import MatchTimeLine from "./MatchTimeLine";
import { MatchTypes } from "../../../types/dto/riotapi/match/MatchDTO";
import RiotAPI from "../../../api/RiotAPI";
import { SummonerTypes } from "../../../types/dto/riotapi/summoner/summonerDTO";

class MatchDTO extends DTO implements MatchTypes.DTO {
    constructor(api: RiotAPI) {
        super(api);
    }

    async getMatchListIdsByPUUID(
        puuid: SummonerTypes.PUUID,
        cluster?: ClusterName
    ): Promise<Array<MatchTypes.MatchID>> {
        const reqCluster = cluster || this.api.regionFallback.cluster;
        return this.api.riotRequest(
            reqCluster,
            MatchTypes.RestEndpoint.getMatchListIdsByPUUID,
            { puuid }
        );
    }

    async getMatchListByPUUID(
        puuid: SummonerTypes.PUUID,
        cluster?: ClusterName
    ): Promise<Array<Match>> {
        const matchIds = await this.getMatchListIdsByPUUID(puuid, cluster);
        return Promise.all(
            matchIds.map((matchId) => this.getMatchByID(matchId, cluster))
        );
    }

    async getMatchByID(
        matchId: MatchTypes.MatchID,
        cluster?: ClusterName
    ): Promise<Match> {
        const reqCluster = cluster || this.api.regionFallback.cluster;
        const match: MatchTypes.Match = await this.api.riotRequest(
            reqCluster,
            MatchTypes.RestEndpoint.getMatchByID,
            { matchId }
        );
        return new Match(this.api, reqCluster, match);
    }

    async getMatchTimeLineByID(
        matchId: MatchTypes.MatchID,
        cluster?: ClusterName
    ): Promise<MatchTimeLine> {
        const reqCluster = cluster || this.api.regionFallback.cluster;
        const matchTimeLine: MatchTypes.MatchTimeLine =
            await this.api.riotRequest(
                reqCluster,
                MatchTypes.RestEndpoint.getMatchTimeLineByID,
                { matchId }
            );
        return new MatchTimeLine(this.api, reqCluster, matchTimeLine);
    }
}

export default MatchDTO;
