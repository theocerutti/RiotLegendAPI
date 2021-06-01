import DDragonAPI from "../../api/DDragonAPI";
import SummonerSpells from "./class/summonerspells";
import { SummonerSpellsTypes } from "../../types/dto/ddragon/sumonnerspells";

export const getSummonerSpellsDTO = (
    api: DDragonAPI
): SummonerSpellsTypes.DTO => ({
    all: async (version?, locale?): Promise<SummonerSpells> => {
        const res: SummonerSpellsTypes.APIResponse = await api.ddragonRequest(
            SummonerSpellsTypes.RestEndpoint.all,
            {
                version: version || (await api.versions.latest()),
                locale: locale || api.regionFallback.locale,
            }
        );
        return new SummonerSpells(res);
    },
});
