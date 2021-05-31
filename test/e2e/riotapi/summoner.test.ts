import RiotAPI from "../../../src";

const riotAPIKey = process.env.RIOT_API_KEY_LOL_TEST || "";

describe("RiotAPI", () => {
    describe("Summoner", () => {
        const checkIfValidSummoner = (summoner) => {
            expect(summoner.name).toEqual("Priciiix");
            expect(Object.keys(summoner)).toEqual([
                "id",
                "accountId",
                "puuid",
                "name",
                "profileIconId",
                "revisionDate",
                "summonerLevel",
            ]);
        };

        test("getBySummonerName", async () => {
            const api = new RiotAPI({ riotToken: riotAPIKey });

            const resp = await api.summoner.getByName("Priciiix", "euw1");
            checkIfValidSummoner(resp);
        });

        test("getByAccountID", async () => {
            const api = new RiotAPI({ riotToken: riotAPIKey });

            const summoner = await api.summoner.getByName("Priciiix", "euw1");
            const resp = await api.summoner.getByAccountID(
                summoner.accountId,
                "euw1"
            );
            checkIfValidSummoner(resp);
        });

        test("getByPUUID", async () => {
            const api = new RiotAPI({ riotToken: riotAPIKey });

            const summoner = await api.summoner.getByName("Priciiix", "euw1");
            const resp = await api.summoner.getByPUUID(summoner.puuid, "euw1");
            checkIfValidSummoner(resp);
        });

        test("getByID", async () => {
            const api = new RiotAPI({ riotToken: riotAPIKey });

            const summoner = await api.summoner.getByName("Priciiix", "euw1");
            const resp = await api.summoner.getByID(summoner.id, "euw1");
            checkIfValidSummoner(resp);
        });

        // TODO: add getMe test
    });
});
