import RiotAPI from "../../../../src";
import { checkIfAPIStatusIsValid } from "../../../utils";

const riotAPIKey = process.env.RIOT_API_KEY_LOL_TEST || "";

describe("RiotAPI", () => {
    describe("APIStatusDTO", () => {
        let api: RiotAPI = null;

        beforeAll(async () => {
            api = new RiotAPI({ riotToken: riotAPIKey });
        });

        test("getStatus", async () => {
            const status = await api.apiStatus.getStatus("euw1");
            checkIfAPIStatusIsValid(status);
        });
    });
});
