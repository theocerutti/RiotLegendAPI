import DDragonAPI from "../../api/DDragonAPI";
import Items from "./class/items";
import { ItemsTypes } from "../../types/dto/ddragon/items";

export const getItemsDTO = (api: DDragonAPI): ItemsTypes.DTO => ({
    all: async (version?, locale?): Promise<Items> => {
        const res: ItemsTypes.APIResponse = await api.ddragonRequest(
            ItemsTypes.RestEndpoint.all,
            {
                version: version || (await api.versions.latest()),
                locale: locale || api.regionFallback.locale,
            }
        );
        return new Items(res);
    },
});
