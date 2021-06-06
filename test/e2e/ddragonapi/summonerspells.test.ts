import DDragonAPI from "../../../src/api/DDragonAPI";
import SummonerSpells from "../../../src/dto/ddragon/summonerSpell/summonerspells";
import { checkIfSummonerSpellIsValid } from "../../utils";

describe("DDragonAPI", () => {
    describe("SummonerSpells", () => {
        let api: DDragonAPI = null;
        let summonerSpells: SummonerSpells = null;

        beforeAll(async () => {
            api = new DDragonAPI();
            summonerSpells = await api.summonerSpells.all();
        });

        test("get all summoner spells", async () => {
            expect(summonerSpells).toBeInstanceOf(SummonerSpells);
            checkIfSummonerSpellIsValid(summonerSpells.data);
        });

        test("get summoner spell by ID", async () => {
            const summonerSpellID = "SummonerFlash";
            const summonerSpell = summonerSpells.getByID(summonerSpellID);
            expect(summonerSpell.id).toBe(summonerSpellID);
        });

        test("get summoner spell with bad ID", async () => {
            const summonerSpellID = "thisisabadid";
            const summonerSpell = summonerSpells.getByID(summonerSpellID);
            expect(summonerSpell).toBeNull();
        });
    });
});
