import DDragonAPI from "../../../api/DDragonAPI";
import DTO from "../DTO";
import { ItemTypes } from "../../../types/dto/ddragon/item/itemDTO";
import Items from "./items";

class ItemDTO extends DTO implements ItemTypes.DTO {
    constructor(api: DDragonAPI) {
        super(api);
    }

    async all(version?, locale?): Promise<Items> {
        const versionReq = version || (await this.api.versions.latest());
        const localeReq = locale || this.api.regionFallback.locale;
        const res: ItemTypes.APIResponse = await this.api.ddragonRequest(
            ItemTypes.RestEndpoint.all,
            {
                version: versionReq,
                locale: localeReq,
            }
        );
        return new Items(this.api, localeReq, versionReq, res);
    }
}

export default ItemDTO;
