import {
    DEFAULT_PLATFORM_NAME,
    DEFAULT_SUMMONER_NAME,
    checkIfMatchIsValid,
    checkIfMatchTimeLineIsValid,
} from "../../../utils";
import Match from "../../../../src/dto/riotapi/match/Match";
import MatchTimeLine from "../../../../src/dto/riotapi/match/MatchTimeLine";
import RiotAPI from "../../../../src";
import Summoner from "../../../../src/dto/riotapi/summoner/Summoner";

const riotAPIKey = process.env.RIOT_API_KEY_LOL_TEST || "";

describe("RiotAPI", () => {
    describe("Match", () => {
        let api: RiotAPI = null;
        let summoner: Summoner = null;

        beforeAll(async () => {
            api = new RiotAPI({ riotToken: riotAPIKey });
            summoner = await api.summoner.getByName(DEFAULT_SUMMONER_NAME);
        });

        test("getMatchListIdsByPUUID", async () => {
            const matchIds = await api.match.getMatchListIdsByPUUID(
                summoner.puuid,
                DEFAULT_PLATFORM_NAME
            );
            expect(matchIds).toBeInstanceOf(Array);
            expect(typeof matchIds[0]).toBe("string");
        });

        test("getMatchListByPUUID", async () => {
            const matches = await api.match.getMatchListByPUUID(
                summoner.puuid,
                DEFAULT_PLATFORM_NAME
            );
            expect(matches).toBeInstanceOf(Array);
            const firstMatch = matches[0];
            expect(firstMatch).toBeInstanceOf(Match);
            checkIfMatchIsValid(firstMatch.data);
        });

        test("getMatchByID", async () => {
            const matchIds = await api.match.getMatchListIdsByPUUID(
                summoner.puuid,
                DEFAULT_PLATFORM_NAME
            );
            const match = await api.match.getMatchByID(
                matchIds[0],
                DEFAULT_PLATFORM_NAME
            );
            expect(match).toBeInstanceOf(Match);
            checkIfMatchIsValid(match.data);
        });

        test("getMatchTimeLineByID", async () => {
            const matchIds = await api.match.getMatchListIdsByPUUID(
                summoner.puuid,
                DEFAULT_PLATFORM_NAME
            );
            const matchTimeLine = await api.match.getMatchTimeLineByID(
                matchIds[0],
                DEFAULT_PLATFORM_NAME
            );
            expect(matchTimeLine).toBeInstanceOf(MatchTimeLine);
            checkIfMatchTimeLineIsValid(matchTimeLine.data);
        });
    });
});
