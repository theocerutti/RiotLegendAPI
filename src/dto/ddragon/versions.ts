import DDragonAPI from "../../api/DDragonAPI";
import { GameVersions } from "../../types/ddragon";
import { Versions } from "../../types/dto/ddragon/versions";

export const getVersionsDTO = (api: DDragonAPI): Versions.DTO => ({
    getAllGameVersions: (): Promise<GameVersions> =>
        api.ddragonRequest(Versions.RestEndpoint.getAllGameVersions),
});
