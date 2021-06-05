import MatchToMatchTimeLineRelation from "./relations/MatchToMatchTimeLineRelation";
import { MatchTypes } from "../../../types/dto/riotapi/match/MatchDTO";
import { PlatformName } from "../../../types/endpoints";
import RiotAPI from "../../../api/RiotAPI";
import RiotBaseModel from "../RiotBaseModel";

class Match extends RiotBaseModel {
    private readonly matchLineRelation: MatchToMatchTimeLineRelation;

    constructor(api: RiotAPI, platform: PlatformName, match: MatchTypes.Match) {
        super(api, platform, match);
        this.matchLineRelation = new MatchToMatchTimeLineRelation(api, this);
    }

    get matchLine(): MatchToMatchTimeLineRelation {
        return this.matchLineRelation;
    }
}

export default Match;
