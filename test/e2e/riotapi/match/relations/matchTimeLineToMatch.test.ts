import {
    DEFAULT_PLATFORM_NAME,
    DEFAULT_SUMMONER_NAME,
    checkIfMatchIsValid,
} from "../../../../utils";
import Match from "../../../../../src/dto/riotapi/match/Match";
import MatchTimeLine from "../../../../../src/dto/riotapi/match/MatchTimeLine";
import RiotAPI from "../../../../../src";
import Summoner from "../../../../../src/dto/riotapi/summoner/Summoner";

const riotAPIKey = process.env.RIOT_API_KEY_LOL_TEST || "";

describe("RiotAPI", () => {
    describe("Match", () => {
        let api: RiotAPI = null;
        let summoner: Summoner = null;
        let matchTimeLine: MatchTimeLine = null;

        beforeAll(async () => {
            api = new RiotAPI({ riotToken: riotAPIKey });
            summoner = await api.summoner.getByName(DEFAULT_SUMMONER_NAME);
            const matchIds = await api.match.getMatchListIdsByPUUID(
                summoner.puuid,
                DEFAULT_PLATFORM_NAME
            );
            matchTimeLine = await api.match.getMatchTimeLineByID(
                matchIds[0],
                DEFAULT_PLATFORM_NAME
            );
        });

        test("getMatch", async () => {
            const match = await matchTimeLine.match.getMatch();
            expect(match).toBeInstanceOf(Match);
            checkIfMatchIsValid(match.data);
        });
    });
});
