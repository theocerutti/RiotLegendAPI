import Champion from "../../../src/dto/ddragon/class/champion";
import DDragonAPI from "../../../src/api/DDragonAPI";
import { isURL } from "../../utils";

describe("DDragonAPI", () => {
    describe("Champions", () => {
        test("get all champions", async () => {
            const api = new DDragonAPI();
            const champions = await api.champions.all();
            expect(champions).toBeInstanceOf(Array);
            const firstChampion = champions[0];
            expect(firstChampion).toBeInstanceOf(Champion);
            expect(Object.keys(firstChampion.metadata)).toEqual([
                "type",
                "format",
                "version",
            ]);
        });

        test("get champion by name", async () => {
            const api = new DDragonAPI();
            const champions = await api.champions.getByChampionName("Zyra");
            expect(champions).toBeInstanceOf(Champion);
            expect(Object.keys(champions.metadata)).toEqual([
                "type",
                "format",
                "version",
            ]);
        });

        test("get assets", async () => {
            const api = new DDragonAPI();
            const champion = await api.champions.getByChampionName("Zyra");
            expect(champion).toBeInstanceOf(Champion);
            champion
                .getAllAbilityAssetUrl()
                .map((abilityUrl) => expect(isURL(abilityUrl)).toBeTruthy());
            champion
                .getAllLoadingAssetUrl()
                .map((loadingUrl) => expect(isURL(loadingUrl)).toBeTruthy());
            champion
                .getAllSplashAssetUrl()
                .map((splashUrl) => expect(isURL(splashUrl)).toBeTruthy());
            expect(isURL(champion.getSquareAssetUrl())).toBeTruthy();
            expect(isURL(champion.getLoadingAssetUrl())).toBeTruthy();
            expect(isURL(champion.getSplashAssetUrl())).toBeTruthy();
            expect(isURL(champion.getSpriteSheetUrl())).toBeTruthy();
            expect(isURL(champion.getPassiveAssetUrl())).toBeTruthy();
            expect(isURL(champion.getQSpellAssetUrl())).toBeTruthy();
            expect(isURL(champion.getWSpellAssetUrl())).toBeTruthy();
            expect(isURL(champion.getESpellAssetUrl())).toBeTruthy();
            expect(isURL(champion.getRSpellAssetUrl())).toBeTruthy();
        });
    });
});
