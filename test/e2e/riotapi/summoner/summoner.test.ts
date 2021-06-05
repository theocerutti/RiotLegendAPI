import {
    DEFAULT_REGION_NAME,
    DEFAULT_SUMMONER_NAME,
    checkIfValidSummoner,
} from "../../../utils";
import RiotAPI from "../../../../src";
import Summoner from "../../../../src/dto/riotapi/summoner/Summoner";

const riotAPIKey = process.env.RIOT_API_KEY_LOL_TEST || "";

describe("RiotAPI", () => {
    describe("Summoner", () => {
        let api: RiotAPI = null;
        let summoner: Summoner = null;

        beforeAll(async () => {
            api = new RiotAPI({ riotToken: riotAPIKey });
            summoner = await api.summoner.getByName(
                DEFAULT_SUMMONER_NAME,
                DEFAULT_REGION_NAME
            );
        });

        test("getBySummonerName", async () => {
            checkIfValidSummoner(summoner.data);
        });

        test("getByAccountID", async () => {
            const resp = await api.summoner.getByAccountID(
                summoner.data.accountId,
                DEFAULT_REGION_NAME
            );
            checkIfValidSummoner(resp.data);
        });

        test("getByPUUID", async () => {
            const resp = await api.summoner.getByPUUID(
                summoner.data.puuid,
                DEFAULT_REGION_NAME
            );
            checkIfValidSummoner(resp.data);
        });

        test("getByID", async () => {
            const resp = await api.summoner.getByID(
                summoner.data.id,
                DEFAULT_REGION_NAME
            );
            checkIfValidSummoner(resp.data);
        });

        // TODO: add getMe test
    });
});
