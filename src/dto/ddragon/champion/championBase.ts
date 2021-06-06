import { ChampionTypes } from "../../../types/dto/ddragon/champion/championDTO";
import DDragonAPI from "../../../api/DDragonAPI";
import DDragonBaseModel from "../DDragonBaseModel";
import { Locale } from "../../../types/ddragon";
import { VersionsTypes } from "../../../types/dto/ddragon/versions";

class ChampionBase extends DDragonBaseModel<ChampionTypes.ChampionBase> {
    constructor(
        api: DDragonAPI,
        locale: Locale,
        version: VersionsTypes.GameVersion,
        championBaseData: ChampionTypes.ChampionBase
    ) {
        super(api, locale, version, championBaseData);
    }
}

export default ChampionBase;
