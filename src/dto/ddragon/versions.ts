import DDragonAPI from "../../api/DDragonAPI";
import { Versions } from "../../types/dto/ddragon/versions";

export const getVersionsDTO = (api: DDragonAPI): Versions.DTO => ({
    latest: async (): Promise<Versions.GameVersion> => {
        const versions: Versions.GameVersions = await api.ddragonRequest(
            Versions.RestEndpoint.all
        );
        return versions[0];
    },
    all: (): Promise<Versions.GameVersions> =>
        api.ddragonRequest(Versions.RestEndpoint.all),
});
