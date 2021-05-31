import Champion from "../../types/dto/ddragon/champion";
import { Champions } from "../../types/dto/ddragon/champions";
import DDragonAPI from "../../api/DDragonAPI";

export const getChampionsDTO = (api: DDragonAPI): Champions.DTO => ({
    all: async (version?, locale?): Promise<Champion> => {
        const res: Champions.ChampionsResponse = await api.ddragonRequest(
            Champions.RestEndpoint.all,
            {
                version: version || (await api.versions.latest()),
                locale: locale || api.regionFallback.locale,
            }
        );
        return new Champion(res);
    },
    getByChampionName: async (
        championName,
        version?,
        locale?
    ): Promise<Champion> => {
        const res: Champions.ChampionsResponse = await api.ddragonRequest(
            Champions.RestEndpoint.getByChampionName,
            {
                version: version || (await api.versions.latest()),
                locale: locale || api.regionFallback.locale,
                championName,
            }
        );
        return new Champion(res);
    },
});
