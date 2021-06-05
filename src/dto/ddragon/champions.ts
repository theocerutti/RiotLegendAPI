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
        // TODO: this route doesn't respond with the same api response than the others
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
    getByChampionID: async (
        championID,
        version?,
        locale?
    ): Promise<Champion> => {
        const res: ChampionsTypes.APIResponse = await api.ddragonRequest(
            ChampionsTypes.RestEndpoint.all,
            {
                version: version || (await api.versions.latest()),
                locale: locale || api.regionFallback.locale,
            }
        );
        const championHeader = extractChampionHeader(res);
        const championKey = Object.keys(res.data).find(
            (key) => parseInt(res.data[key].key, 10) === championID
        );
        return new Champion(res.data[championKey], championHeader);
    },
});
