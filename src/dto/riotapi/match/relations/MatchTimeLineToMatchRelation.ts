import Match from "../Match";
import MatchTimeLine from "../MatchTimeLine";
import ModelRelation from "../../ModelRelation";
import RiotAPI from "../../../../api/RiotAPI";

class MatchTimeLineToMatchRelation extends ModelRelation {
    constructor(api: RiotAPI, matchTimeLine: MatchTimeLine) {
        super(api, matchTimeLine);
    }

    getMatch(): Promise<Match> {
        return this.api.match.getMatchByID(this.model.data.metadata.matchId);
    }
}

export default MatchTimeLineToMatchRelation;
