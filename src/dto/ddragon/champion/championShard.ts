import ChampionBase from "./championBase";
import { ChampionTypes } from "../../../types/dto/ddragon/champion/championDTO";
import DDragonAPI from "../../../api/DDragonAPI";
import { Locale } from "../../../types/ddragon";
import { VersionsTypes } from "../../../types/dto/ddragon/versions";

class ChampionShard extends ChampionBase {
    private readonly dataChampion: ChampionTypes.ChampionShard;

    constructor(
        api: DDragonAPI,
        locale: Locale,
        version: VersionsTypes.GameVersion,
        championRes: ChampionTypes.ChampionShard
    ) {
        super(api, locale, version, championRes);
        this.dataChampion = championRes;
    }

    get data(): ChampionTypes.ChampionShard {
        return this.dataChampion;
    }
}

export default ChampionShard;
