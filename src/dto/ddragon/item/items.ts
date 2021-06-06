import DDragonAPI from "../../../api/DDragonAPI";
import DDragonBaseModel from "../DDragonBaseModel";
import Item from "./item";
import { ItemTypes } from "../../../types/dto/ddragon/item/itemDTO";
import { Locale } from "../../../types/ddragon";
import { VersionTypes } from "../../../types/dto/ddragon/version/versionDTO";

// TODO: interpreting items texts + add layer to get datas with ease
class Items extends DDragonBaseModel<ItemTypes.APIResponse> {
    constructor(
        api: DDragonAPI,
        locale: Locale,
        version: VersionTypes.GameVersion,
        items: ItemTypes.APIResponse
    ) {
        super(api, locale, version, items);
    }

    getByID(id: string): Item | null {
        if (!Object.prototype.hasOwnProperty.call(this.data.data, id)) {
            return null;
        }
        return new Item(
            this.api,
            this.locale,
            this.version,
            this.data.data[id]
        );
    }

    getByName(name: string): Item | null {
        const filteredItems = Object.values(this.data.data).filter(
            (it) => it.name === name
        );
        if (!filteredItems || filteredItems.length <= 0) {
            return null;
        }
        return new Item(this.api, this.locale, this.version, filteredItems[0]);
    }
}

export default Items;
