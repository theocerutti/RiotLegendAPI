import RiotAPI from "../../../src";

const riotAPIKey = process.env.RIOT_API_KEY_LOL_TEST || "";

describe("RiotAPI", () => {
    describe("Summoner", () => {
        let api = null;
        let summoner = null;

        beforeAll(async () => {
            api = new RiotAPI({ riotToken: riotAPIKey });
            summoner = await api.summoner.getByName("Priciiix", "euw1");
        });

        const checkIfValidSummoner = (summ) => {
            const summData = summ.data;
            expect(summData.name).toEqual("Priciiix");
            expect(Object.keys(summData).sort()).toEqual(
                [
                    "id",
                    "accountId",
                    "puuid",
                    "name",
                    "profileIconId",
                    "revisionDate",
                    "summonerLevel",
                ].sort()
            );
        };

        test("getBySummonerName", async () => {
            checkIfValidSummoner(summoner);
        });

        test("getByAccountID", async () => {
            const resp = await api.summoner.getByAccountID(
                summoner.data.accountId,
                "euw1"
            );
            checkIfValidSummoner(resp);
        });

        test("getByPUUID", async () => {
            const resp = await api.summoner.getByPUUID(
                summoner.data.puuid,
                "euw1"
            );
            checkIfValidSummoner(resp);
        });

        test("getByID", async () => {
            const resp = await api.summoner.getByID(summoner.data.id, "euw1");
            checkIfValidSummoner(resp);
        });

        // TODO: add getMe test
    });
});
