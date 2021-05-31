import { Champions } from "../../types/dto/ddragon/champions";
import DDragonAPI from "../../api/DDragonAPI";

export const getChampionsDTO = (api: DDragonAPI): Champions.DTO => ({
    all: async (version?, locale?): Promise<Champions.ChampionsResponse> =>
        api.ddragonRequest(Champions.RestEndpoint.all, {
            version: version || (await api.versions.latest()),
            locale: locale || api.regionFallback.locale,
        }),
    getByChampionName: async (
        championName,
        version?,
        locale?
    ): Promise<Champions.Champion> =>
        api.ddragonRequest(Champions.RestEndpoint.getByChampionName, {
            version: version || (await api.versions.latest()),
            locale: locale || api.regionFallback.locale,
            championName,
        }),
});
