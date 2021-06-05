import { DEFAULT_REGION_NAME, checkIfAPIStatusIsValid } from "../../../utils";
import RiotAPI from "../../../../src";

const riotAPIKey = process.env.RIOT_API_KEY_LOL_TEST || "";

describe("RiotAPI", () => {
    describe("APIStatusDTO", () => {
        let api: RiotAPI = null;

        beforeAll(async () => {
            api = new RiotAPI({ riotToken: riotAPIKey });
        });

        test("getStatus", async () => {
            const status = await api.apiStatus.getStatus(DEFAULT_REGION_NAME);
            checkIfAPIStatusIsValid(status);
        });
    });
});
