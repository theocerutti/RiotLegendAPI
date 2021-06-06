import DDragonAPI from "../../../api/DDragonAPI";
import DDragonBaseModel from "../DDragonBaseModel";
import { ItemTypes } from "../../../types/dto/ddragon/item/itemDTO";
import { Locale } from "../../../types/ddragon";
import { VersionTypes } from "../../../types/dto/ddragon/version/versionDTO";

class Item extends DDragonBaseModel<ItemTypes.Item> {
    constructor(
        api: DDragonAPI,
        locale: Locale,
        version: VersionTypes.GameVersion,
        item: ItemTypes.Item
    ) {
        super(api, locale, version, item);
    }
}

export default Item;
