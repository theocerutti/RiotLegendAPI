import { checkIfMinimapIsValid, isURL } from "../../utils";
import DDragonAPI from "../../../src/api/DDragonAPI";
import Minimap from "../../../src/dto/ddragon/minimap/minimap";
import Minimaps from "../../../src/dto/ddragon/minimap/minimaps";

describe("DDragonAPI", () => {
    describe("Minimaps", () => {
        let api: DDragonAPI = null;
        let minimaps: Minimaps = null;

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
            checkIfMinimapIsValid(firstMinimap.data);
            expect(isURL(firstMinimap.url)).toBeTruthy();
        });
    });
});
