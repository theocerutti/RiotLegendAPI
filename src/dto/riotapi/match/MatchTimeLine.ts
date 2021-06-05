import MatchTimeLineToMatchRelation from "./relations/MatchTimeLineToMatchRelation";
import { MatchTypes } from "../../../types/dto/riotapi/match/MatchDTO";
import { PlatformName } from "../../../types/endpoints";
import RiotAPI from "../../../api/RiotAPI";
import RiotBaseModel from "../RiotBaseModel";

class MatchTimeLine extends RiotBaseModel {
    private readonly matchRelation: MatchTimeLineToMatchRelation;

    constructor(
        api: RiotAPI,
        platform: PlatformName,
        matchTimeLine: MatchTypes.MatchTimeLine
    ) {
        super(api, platform, matchTimeLine);
        this.matchRelation = new MatchTimeLineToMatchRelation(api, this);
    }

    get match(): MatchTimeLineToMatchRelation {
        return this.matchRelation;
    }
}

export default MatchTimeLine;
