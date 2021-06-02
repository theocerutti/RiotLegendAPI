import DDragonAPI from "../../../src/api/DDragonAPI";
import Minimap from "../../../src/dto/ddragon/class/minimap";
import Minimaps from "../../../src/dto/ddragon/class/minimaps";
import { isURL } from "../../utils";

describe("DDragonAPI", () => {
    describe("Minimaps", () => {
        let api = null;
        let minimaps = null;

        beforeAll(async () => {
            api = new DDragonAPI();
            minimaps = await api.minimaps.all();
        });

        test("get all minimaps", () => {
            expect(minimaps).toBeInstanceOf(Minimaps);
            const allMinimaps = minimaps.minimaps;
            expect(allMinimaps).toBeInstanceOf(Array);
            const firstMinimap = allMinimaps[0];
            expect(firstMinimap).toBeInstanceOf(Minimap);
            expect(Object.keys(firstMinimap.data).sort()).toEqual(
                ["mapId", "mapName", "notes"].sort()
            );
            expect(isURL(firstMinimap.url)).toBeTruthy();
        });
    });
});
