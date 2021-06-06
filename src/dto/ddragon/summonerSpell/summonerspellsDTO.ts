import DDragonAPI from "../../../api/DDragonAPI";
import DTO from "../DTO";
import SummonerSpells from "./summonerspells";
import { SummonerSpellsTypes } from "../../../types/dto/ddragon/summonerSpell/sumonnerspellDTO";

class SummonerSpellDTO extends DTO implements SummonerSpellsTypes.DTO {
    constructor(api: DDragonAPI) {
        super(api);
    }

    async all(version?, locale?): Promise<SummonerSpells> {
        const versionReq = version || (await this.api.versions.latest());
        const localeReq = locale || this.api.regionFallback.locale;
        const res: SummonerSpellsTypes.APIResponse =
            await this.api.ddragonRequest(
                SummonerSpellsTypes.RestEndpoint.all,
                {
                    version: versionReq,
                    locale: localeReq,
                }
            );
        return new SummonerSpells(this.api, localeReq, versionReq, res);
    }
}

export default SummonerSpellDTO;
