import Champion from "../../../src/dto/ddragon/class/champion";
import DDragonAPI from "../../../src/api/DDragonAPI";
import { isURL } from "../../utils";

describe("DDragonAPI", () => {
    describe("Champions", () => {
        let api = null;
        let champions = null;
        let zyraChampion = null;

        beforeAll(async () => {
            api = new DDragonAPI();
            champions = await api.champions.all();
            zyraChampion = await api.champions.getByChampionName("Zyra");
        });

        test("get all champions", async () => {
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
            expect(zyraChampion).toBeInstanceOf(Champion);
            expect(Object.keys(zyraChampion.metadata)).toEqual([
                "type",
                "format",
                "version",
            ]);
        });

        test("get assets", async () => {
            expect(zyraChampion).toBeInstanceOf(Champion);
            zyraChampion
                .getAllAbilityAssetUrl()
                .map((abilityUrl) => expect(isURL(abilityUrl)).toBeTruthy());
            zyraChampion
                .getAllLoadingAssetUrl()
                .map((loadingUrl) => expect(isURL(loadingUrl)).toBeTruthy());
            zyraChampion
                .getAllSplashAssetUrl()
                .map((splashUrl) => expect(isURL(splashUrl)).toBeTruthy());
            expect(isURL(zyraChampion.getSquareAssetUrl())).toBeTruthy();
            expect(isURL(zyraChampion.getLoadingAssetUrl())).toBeTruthy();
            expect(isURL(zyraChampion.getSplashAssetUrl())).toBeTruthy();
            expect(isURL(zyraChampion.getSpriteSheetUrl())).toBeTruthy();
            expect(isURL(zyraChampion.getPassiveAssetUrl())).toBeTruthy();
            expect(isURL(zyraChampion.getQSpellAssetUrl())).toBeTruthy();
            expect(isURL(zyraChampion.getWSpellAssetUrl())).toBeTruthy();
            expect(isURL(zyraChampion.getESpellAssetUrl())).toBeTruthy();
            expect(isURL(zyraChampion.getRSpellAssetUrl())).toBeTruthy();
        });

        test("get assets with bad parameters", async () => {
            expect(zyraChampion).toBeInstanceOf(Champion);
            expect(isURL(zyraChampion.getSplashAssetUrl(-2))).toBeFalsy();
            expect(zyraChampion.getSplashAssetUrl(-2)).toBeNull();
            expect(isURL(zyraChampion.getLoadingAssetUrl(99999))).toBeFalsy();
            expect(zyraChampion.getLoadingAssetUrl(99999)).toBeNull();
            expect(
                isURL(zyraChampion.getAbilityAssetUrl("...bad_id..."))
            ).toBeFalsy();
            expect(zyraChampion.getAbilityAssetUrl("...bad_id...")).toBeNull();
        });
    });
});
