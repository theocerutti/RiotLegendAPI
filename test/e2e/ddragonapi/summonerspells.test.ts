import DDragonAPI from "../../../src/api/DDragonAPI";
import SummonerSpells from "../../../src/dto/ddragon/class/summonerspells";

describe("DDragonAPI", () => {
    describe("SummonerSpells", () => {
        test("get all summoner spells", async () => {
            const api = new DDragonAPI();
            const summonerSpells = await api.summonerSpells.all();
            expect(summonerSpells).toBeInstanceOf(SummonerSpells);
            expect(Object.keys(summonerSpells.metadata)).toEqual([
                "type",
                "version",
            ]);
        });

        test("get summoner spell by ID", async () => {
            const api = new DDragonAPI();
            const summonerSpells = await api.summonerSpells.all();
            const summonerSpellID = "SummonerFlash";
            const summonerSpell = summonerSpells.getByID(summonerSpellID);
            expect(summonerSpell.id).toBe(summonerSpellID);
        });
    });
});
