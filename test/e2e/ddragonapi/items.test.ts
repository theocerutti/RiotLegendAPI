import DDragonAPI from "../../../src/api/DDragonAPI";
import Items from "../../../src/dto/ddragon/class/items";

describe("DDragonAPI", () => {
    describe("Items", () => {
        test("get all items", async () => {
            const api = new DDragonAPI();
            const items = await api.items.all();
            expect(items).toBeInstanceOf(Items);
            expect(Object.keys(items.metadata)).toEqual([
                "type",
                "version",
                "basic",
                "groups",
                "tree",
            ]);
        });

        test("get item by ID", async () => {
            const api = new DDragonAPI();
            const items = await api.items.all();
            const itemID = "1001";
            const item = items.getByID(itemID);
            expect(item.name).toBe("Boots");
        });

        test("get item by name", async () => {
            const api = new DDragonAPI();
            const items = await api.items.all();
            const itemName = "Boots";
            const item = items.getByName(itemName);
            expect(item.name).toBe("Boots");
        });
    });
});
