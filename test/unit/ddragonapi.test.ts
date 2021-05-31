import DDragonAPI from "../../src/api/DDragonAPI";

describe("DDragonAPI", () => {
    test("should constructor properly", () => {
        const api = new DDragonAPI();
        expect(api).toBeInstanceOf(DDragonAPI);
    });
});
