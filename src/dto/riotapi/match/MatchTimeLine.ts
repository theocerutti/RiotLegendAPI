import { ClusterName } from "../../../types/endpoints";
import MatchTimeLineToMatchRelation from "./relations/MatchTimeLineToMatchRelation";
import { MatchTypes } from "../../../types/dto/riotapi/match/MatchDTO";
import RiotAPI from "../../../api/RiotAPI";
import RiotBaseModel from "../RiotBaseModel";

class MatchTimeLine extends RiotBaseModel<MatchTypes.MatchTimeLine> {
    private readonly matchRelation: MatchTimeLineToMatchRelation;

    constructor(
        api: RiotAPI,
        cluster: ClusterName,
        matchTimeLine: MatchTypes.MatchTimeLine
    ) {
        super(api, { cluster }, matchTimeLine);
        this.matchRelation = new MatchTimeLineToMatchRelation(api, this);
    }

    get match(): MatchTimeLineToMatchRelation {
        return this.matchRelation;
    }
}

export default MatchTimeLine;
