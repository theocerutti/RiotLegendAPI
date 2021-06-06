import Champion from "./champion";
import ChampionShard from "./championShard";
import { ChampionTypes } from "../../../types/dto/ddragon/champion/championDTO";
import DDragonAPI from "../../../api/DDragonAPI";
import DTO from "../DTO";

class ChampionDTO extends DTO implements ChampionTypes.DTO {
    constructor(api: DDragonAPI) {
        super(api);
    }

    async all(version?, locale?): Promise<Array<ChampionShard>> {
        const versionReq = version || (await this.api.versions.latest());
        const localeReq = locale || this.api.regionFallback.locale;
        const res: ChampionTypes.APIResponseShardChampion =
            await this.api.ddragonRequest(ChampionTypes.RestEndpoint.all, {
                version: versionReq,
                locale: localeReq,
            });
        return Object.keys(res.data).map(
            (key) =>
                new ChampionShard(
                    this.api,
                    localeReq,
                    versionReq,
                    res.data[key]
                )
        );
    }

    async getByChampionName(
        championName,
        version?,
        locale?
    ): Promise<Champion> {
        const versionReq = version || (await this.api.versions.latest());
        const localeReq = locale || this.api.regionFallback.locale;
        const res: ChampionTypes.APIResponseCompleteChampion =
            await this.api.ddragonRequest(
                ChampionTypes.RestEndpoint.getByChampionName,
                {
                    version: versionReq,
                    locale: localeReq,
                    championName,
                }
            );
        const champion = res.data[Object.keys(res.data)[0]];
        return new Champion(this.api, versionReq, localeReq, champion);
    }

    async getByChampionID(
        championID,
        version?,
        locale?
    ): Promise<ChampionShard> {
        const versionReq = version || (await this.api.versions.latest());
        const localeReq = locale || this.api.regionFallback.locale;
        const res: ChampionTypes.APIResponseShardChampion =
            await this.api.ddragonRequest(ChampionTypes.RestEndpoint.all, {
                version: versionReq,
                locale: localeReq,
            });
        const championKey = Object.keys(res.data).find(
            (key) => parseInt(res.data[key].key, 10) === championID
        );
        return new ChampionShard(
            this.api,
            localeReq,
            versionReq,
            res.data[championKey]
        );
    }
}

export default ChampionDTO;
