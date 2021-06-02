import DDragonAPI from "../../../src/api/DDragonAPI";
import SummonerSpells from "../../../src/dto/ddragon/class/summonerspells";

describe("DDragonAPI", () => {
    describe("SummonerSpells", () => {
        let api = null;
        let summonerSpells = null;

        beforeAll(async () => {
            api = new DDragonAPI();
            summonerSpells = await api.summonerSpells.all();
        });

        test("get all summoner spells", async () => {
            expect(summonerSpells).toBeInstanceOf(SummonerSpells);
            expect(Object.keys(summonerSpells.metadata).sort()).toEqual(
                ["type", "version"].sort()
            );
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
