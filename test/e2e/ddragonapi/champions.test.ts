import DDragonAPI from "../../../src/api/DDragonAPI";

describe("DDragonAPI", () => {
    describe("Champions", () => {
        test("get all champions", async () => {
            const api = new DDragonAPI();
            const champions = await api.champions.all();
            expect(Object.keys(champions)).toEqual([
                "type",
                "format",
                "version",
                "data",
            ]);
        });

        test("get champion by name", async () => {
            const api = new DDragonAPI();
            const champions = await api.champions.getByChampionName("Zyra");
            expect(Object.keys(champions)).toEqual([
                "type",
                "format",
                "version",
                "data",
            ]);
        });
    });
});
