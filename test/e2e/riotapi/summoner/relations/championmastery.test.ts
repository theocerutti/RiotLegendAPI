import { DEFAULT_REGION_NAME, DEFAULT_SUMMONER_NAME } from "../../../../utils";
import ChampionMastery from "../../../../../src/dto/riotapi/championmastery/ChampionMastery";
import RiotAPI from "../../../../../src";
import Summoner from "../../../../../src/dto/riotapi/summoner/Summoner";

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

        test("championMastery getAll", async () => {
            const masteries = await summoner.championMastery.getAll();
            expect(masteries).toBeInstanceOf(Array);
            const firstMastery = masteries[0];
            expect(firstMastery).toBeInstanceOf(ChampionMastery);
            expect(firstMastery.data.summonerId).toBe(summoner.data.id);
        });

        test("championMastery getByChampion", async () => {
            const mastery = await summoner.championMastery.getByChampion("102");
            expect(mastery).toBeInstanceOf(ChampionMastery);
            expect(mastery.data.summonerId).toBe(summoner.data.id);
        });

        test("championMastery getByChampion", async () => {
            const masteryPoints =
                await summoner.championMastery.getTotalScore();
            expect(typeof masteryPoints).toBe("number");
        });
    });
});
