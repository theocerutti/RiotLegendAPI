import DDragonAPI from "../../../src/api/DDragonAPI";
import Items from "../../../src/dto/ddragon/class/items";

describe("DDragonAPI", () => {
    describe("Items", () => {
        let api = null;
        let items = null;

        beforeAll(async () => {
            api = new DDragonAPI();
            items = await api.items.all();
        });

        test("get all items", async () => {
            expect(items).toBeInstanceOf(Items);
            expect(Object.keys(items.metadata).sort()).toEqual(
                ["type", "version", "basic", "groups", "tree"].sort()
            );
        });

        test("get item by ID", async () => {
            const itemID = "1001";
            const item = items.getByID(itemID);
            expect(item.name).toBe("Boots");
        });

        test("get item with bad ID", async () => {
            const itemID = "thisidiswrong";
            const item = items.getByID(itemID);
            expect(item).toBeNull();
        });

        test("get item with bad name", async () => {
            const itemName = "thisisabadname";
            const item = items.getByName(itemName);
            expect(item).toBeNull();
        });
    });
});
