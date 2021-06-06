import { DEFAULT_REGION_NAME, DEFAULT_SUMMONER_NAME } from "../../../../utils";
import ChampionMastery from "../../../../../src/dto/riotapi/championmastery/ChampionMastery";
import RiotAPI from "../../../../../src";
import Summoner from "../../../../../src/dto/riotapi/summoner/Summoner";

const riotAPIKey = process.env.RIOT_API_KEY_LOL_TEST || "";

describe("RiotAPI", () => {
    describe("Summoner", () => {
        let api: RiotAPI = null;
        let summoner: Summoner = null;
        let mastery: ChampionMastery = null;

        beforeAll(async () => {
            api = new RiotAPI({ riotToken: riotAPIKey });
            summoner = await api.summoner.getByName(
                DEFAULT_SUMMONER_NAME,
                DEFAULT_REGION_NAME
            );
            const masteries = await api.championMastery.getByAccountID(
                summoner.data.id
            );
            mastery = masteries[0];
        });

        test("summoner getAll", async () => {
            const summ = await mastery.summoner.getSummoner();
            expect(summ.data.id).toBe(mastery.data.summonerId);
        });
    });
});
