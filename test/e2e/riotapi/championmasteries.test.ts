import RiotAPI from "../../../src";

const riotAPIKey = process.env.RIOT_API_KEY_LOL_TEST || "";

describe("RiotAPI", () => {
    describe("ChampionMasteries", () => {
        let api = null;
        let summoner = null;

        beforeAll(async () => {
            api = new RiotAPI({ riotToken: riotAPIKey });
            summoner = await api.summoner.getByName("Priciiix");
        });

        const checkIfChampionMasteryIsValid = (champMastery) => {
            expect(Object.keys(champMastery).sort()).toEqual(
                [
                    "championPointsUntilNextLevel",
                    "chestGranted",
                    "championId",
                    "lastPlayTime",
                    "championLevel",
                    "summonerId",
                    "championPoints",
                    "championPointsSinceLastLevel",
                    "tokensEarned",
                ].sort()
            );
        };

        test("getByAccountID", async () => {
            const masteries = await api.championMasteries.getByAccountID(
                summoner.data.id,
                "euw1"
            );
            expect(masteries).toBeInstanceOf(Array);
            const firstMastery = masteries[0];
            checkIfChampionMasteryIsValid(firstMastery);
            const masteries2 =
                await summoner.championMasteries.getByAccountID();
            expect(masteries2).toBeInstanceOf(Array);
            const firstMastery2 = masteries[0];
            checkIfChampionMasteryIsValid(firstMastery2);
            expect(firstMastery).toStrictEqual(firstMastery2);
        });

        test("getByChampionID", async () => {
            const championID = "102";
            const mastery = await api.championMasteries.getByChampion(
                summoner.data.id,
                championID,
                "euw1"
            );
            checkIfChampionMasteryIsValid(mastery);
            const mastery2 = await summoner.championMasteries.getByChampion(
                championID
            );
            checkIfChampionMasteryIsValid(mastery2);
            expect(mastery).toStrictEqual(mastery2);
        });

        test("getTotalScore", async () => {
            const totalMasteryScore = await api.championMasteries.getTotalScore(
                summoner.data.id,
                "euw1"
            );
            const totalMasteryScore2 =
                await summoner.championMasteries.getTotalScore();
            expect(totalMasteryScore).toBe(totalMasteryScore2);
        });
    });
});
