import { ClusterName } from "../../../types/endpoints";
import MatchToMatchTimeLineRelation from "./relations/MatchToMatchTimeLineRelation";
import { MatchTypes } from "../../../types/dto/riotapi/match/MatchDTO";
import RiotAPI from "../../../api/RiotAPI";
import RiotBaseModel from "../RiotBaseModel";

class Match extends RiotBaseModel<MatchTypes.Match> {
    private readonly matchLineRelation: MatchToMatchTimeLineRelation;

    constructor(api: RiotAPI, cluster: ClusterName, match: MatchTypes.Match) {
        super(api, { cluster }, match);
        this.matchLineRelation = new MatchToMatchTimeLineRelation(api, this);
    }

    get matchLine(): MatchToMatchTimeLineRelation {
        return this.matchLineRelation;
    }
}

export default Match;
