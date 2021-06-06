import DDragonAPI from "../../../api/DDragonAPI";
import DDragonBaseModel from "../DDragonBaseModel";
import { Locale } from "../../../types/ddragon";
import { SummonerSpellsTypes } from "../../../types/dto/ddragon/summonerSpell/sumonnerspellDTO";
import { VersionTypes } from "../../../types/dto/ddragon/version/versionDTO";

// TODO: interpreting spell texts + add layer to get datas with ease
class SummonerSpells extends DDragonBaseModel<SummonerSpellsTypes.APIResponse> {
    constructor(
        api: DDragonAPI,
        locale: Locale,
        version: VersionTypes.GameVersion,
        summonerSpell: SummonerSpellsTypes.APIResponse
    ) {
        super(api, locale, version, summonerSpell);
    }

    getByID(id: string): SummonerSpellsTypes.SummonerSpell | null {
        if (!Object.prototype.hasOwnProperty.call(this.data.data, id)) {
            return null;
        }
        return this.data.data[id];
    }
}

export default SummonerSpells;
