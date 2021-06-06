import {
    DEFAULT_PLATFORM_NAME,
    DEFAULT_SUMMONER_NAME,
    checkIfMatchTimeLineIsValid,
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
        let match: Match = null;

        beforeAll(async () => {
            api = new RiotAPI({ riotToken: riotAPIKey });
            summoner = await api.summoner.getByName(DEFAULT_SUMMONER_NAME);
            const matchIds = await api.match.getMatchListIdsByPUUID(
                summoner.data.puuid,
                DEFAULT_PLATFORM_NAME
            );
            match = await api.match.getMatchByID(
                matchIds[0],
                DEFAULT_PLATFORM_NAME
            );
        });

        test("getMatchTimeLine", async () => {
            const matchTimeLine = await match.matchLine.getMatchTimeLine();
            expect(matchTimeLine).toBeInstanceOf(MatchTimeLine);
            checkIfMatchTimeLineIsValid(matchTimeLine.data);
        });
    });
});
