import DDragonAPI from "../../../src/api/DDragonAPI";

describe("DDragonAPI", () => {
    describe("Versions", () => {
        test("getAllGameVersions", async () => {
            const api = new DDragonAPI();
            const res = await api.versions.getAllGameVersions();
            console.log(res);
            expect(res).toBeInstanceOf(Array);
            expect(res.length).toBeGreaterThan(0);
        });
    });
});
