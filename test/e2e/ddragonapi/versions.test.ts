import DDragonAPI from "../../../src/api/DDragonAPI";
import { VersionTypes } from "../../../src/types/dto/ddragon/version/versionDTO";

describe("DDragonAPI", () => {
    describe("Versions", () => {
        let api: DDragonAPI = null;
        let versions: VersionTypes.GameVersions = null;

        beforeAll(async () => {
            api = new DDragonAPI();
            versions = await api.versions.all();
        });

        test("get all versions", async () => {
            expect(versions).toBeInstanceOf(Array);
            expect(versions.length).toBeGreaterThan(0);
        });

        test("get latest version", async () => {
            const latestVersion = await api.versions.latest();
            expect(typeof latestVersion).toBe("string");
            expect(latestVersion.length).toBeGreaterThan(0);
        });
    });
});
