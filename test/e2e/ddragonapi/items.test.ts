import { checkIfItemIsValid, checkIfItemsIsValid } from "../../utils";
import DDragonAPI from "../../../src/api/DDragonAPI";
import Items from "../../../src/dto/ddragon/item/items";

describe("DDragonAPI", () => {
    describe("Items", () => {
        let api: DDragonAPI = null;
        let items: Items = null;

        beforeAll(async () => {
            api = new DDragonAPI();
            items = await api.items.all();
        });

        test("get all items", async () => {
            expect(items).toBeInstanceOf(Items);
            checkIfItemsIsValid(items.data);
        });

        test("getAll", async () => {
            const allItems = items.getAll();
            expect(allItems).toBeInstanceOf(Array);
            const firstItem = allItems[0];
            checkIfItemIsValid(firstItem.data);
        });

        test("get item by ID", async () => {
            const itemID = "1001";
            const item = items.getByID(itemID);
            checkIfItemIsValid(item.data);
            expect(item.data.name).toBe("Boots");
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
