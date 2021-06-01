import { ItemsTypes } from "../../../types/dto/ddragon/items";

// TODO: interpreting items texts + add layer to get datas with ease
class Items {
    readonly items: ItemsTypes.APIResponse;

    constructor(items: ItemsTypes.APIResponse) {
        this.items = items;
    }

    getByID(id: string): ItemsTypes.Item {
        if (!Object.prototype.hasOwnProperty.call(this.items.data, id)) {
            throw new Error(`Item with ID=${id} doesn't exists!`);
        }
        return this.items.data[id];
    }

    getByName(name: string): ItemsTypes.Item {
        const filteredItems = Object.values(this.items.data).filter(
            (it) => it.name === name
        );
        if (!filteredItems || filteredItems.length <= 0) {
            throw new Error(`Item with Name=${name} doesn't exists!`);
        }
        return filteredItems[0];
    }

    get metadata(): ItemsTypes.APIResponseHeader {
        return {
            type: this.items.type,
            version: this.items.version,
            basic: this.items.basic,
            groups: this.items.groups,
            tree: this.items.tree,
        };
    }

    get data(): { [key: string]: ItemsTypes.Item } {
        return this.items.data;
    }
}

export default Items;
