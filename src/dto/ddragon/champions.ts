import Champion from "./class/champion";
import { ChampionsTypes } from "../../types/dto/ddragon/champions";
import DDragonAPI from "../../api/DDragonAPI";

function extractChampionHeader(
    res: ChampionsTypes.APIResponse
): ChampionsTypes.APIResponseHeader {
    return {
        type: res.type,
        format: res.format,
        version: res.version,
    };
}

export const getChampionsDTO = (api: DDragonAPI): ChampionsTypes.DTO => ({
    all: async (version?, locale?): Promise<Array<Champion>> => {
        const res: ChampionsTypes.APIResponse = await api.ddragonRequest(
            ChampionsTypes.RestEndpoint.all,
            {
                version: version || (await api.versions.latest()),
                locale: locale || api.regionFallback.locale,
            }
        );
        const championHeader = extractChampionHeader(res);
        return Object.keys(res.data).map(
            (key) => new Champion(res.data[key], championHeader)
        );
    },
    getByChampionName: async (
        championName,
        version?,
        locale?
    ): Promise<Champion> => {
        const res: ChampionsTypes.APIResponse = await api.ddragonRequest(
            ChampionsTypes.RestEndpoint.getByChampionName,
            {
                version: version || (await api.versions.latest()),
                locale: locale || api.regionFallback.locale,
                championName,
            }
        );
        const championHeader = extractChampionHeader(res);
        const champion = res.data[Object.keys(res.data)[0]];
        return new Champion(champion, championHeader);
    },
});
