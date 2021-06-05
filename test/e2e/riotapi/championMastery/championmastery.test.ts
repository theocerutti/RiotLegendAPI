import ChampionMastery from "../../../../src/dto/riotapi/championmastery/ChampionMastery";
import RiotAPI from "../../../../src";
import Summoner from "../../../../src/dto/riotapi/summoner/Summoner";
import { checkIfChampionMasteryIsValid } from "../../../utils";

const riotAPIKey = process.env.RIOT_API_KEY_LOL_TEST || "";

describe("RiotAPI", () => {
    describe("ChampionMasteries", () => {
        let api: RiotAPI = null;
        let summoner: Summoner = null;

        beforeAll(async () => {
            api = new RiotAPI({ riotToken: riotAPIKey });
            summoner = await api.summoner.getByName("Priciiix");
        });

        test("getByAccountID", async () => {
            const masteries = await api.championMastery.getByAccountID(
                summoner.data.id,
                "euw1"
            );
            expect(masteries).toBeInstanceOf(Array);
            const firstMastery = masteries[0];
            expect(firstMastery).toBeInstanceOf(ChampionMastery);
            checkIfChampionMasteryIsValid(firstMastery.data);
            const masteries2 = await summoner.championMastery.getAll();
            expect(masteries2).toBeInstanceOf(Array);
            const firstMastery2 = masteries[0];
            expect(firstMastery2).toBeInstanceOf(ChampionMastery);
            checkIfChampionMasteryIsValid(firstMastery2.data);
            expect(firstMastery.data).toStrictEqual(firstMastery2.data);
        });

        test("getByChampionID", async () => {
            const championID = "102";
            const mastery = await api.championMastery.getByChampion(
                summoner.data.id,
                championID,
                "euw1"
            );
            expect(mastery).toBeInstanceOf(ChampionMastery);
            checkIfChampionMasteryIsValid(mastery.data);
            const mastery2 = await summoner.championMastery.getByChampion(
                championID
            );
            expect(mastery2).toBeInstanceOf(ChampionMastery);
            checkIfChampionMasteryIsValid(mastery2.data);
            expect(mastery.data).toStrictEqual(mastery2.data);
        });

        test("getTotalScore", async () => {
            const totalMasteryScore = await api.championMastery.getTotalScore(
                summoner.data.id,
                "euw1"
            );
            const totalMasteryScore2 =
                await summoner.championMastery.getTotalScore();
            expect(totalMasteryScore).toBe(totalMasteryScore2);
        });
    });
});
