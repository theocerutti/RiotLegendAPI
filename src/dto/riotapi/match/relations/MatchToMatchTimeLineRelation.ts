import Match from "../Match";
import MatchTimeLine from "../MatchTimeLine";
import ModelRelation from "../../ModelRelation";
import RiotAPI from "../../../../api/RiotAPI";

class MatchToMatchTimeLineRelation extends ModelRelation {
    constructor(api: RiotAPI, match: Match) {
        super(api, match);
    }

    getMatchTimeLine(): Promise<MatchTimeLine> {
        return this.api.match.getMatchTimeLineByID(
            this.model.data.metadata.matchId
        );
    }
}

export default MatchToMatchTimeLineRelation;
