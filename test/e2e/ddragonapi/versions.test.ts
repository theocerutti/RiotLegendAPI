import DDragonAPI from "../../../src/api/DDragonAPI";

describe("DDragonAPI", () => {
    describe("Versions", () => {
        test("get all versions", async () => {
            const api = new DDragonAPI();
            const res = await api.versions.all();
            expect(res).toBeInstanceOf(Array);
            expect(res.length).toBeGreaterThan(0);
        });

        test("get latest version", async () => {
            const api = new DDragonAPI();
            const res = await api.versions.latest();
            expect(typeof res).toBe("string");
            expect(res.length).toBeGreaterThan(0);
        });
    });
});
