import DDragonAPI from "../../api/DDragonAPI";
import { VersionsTypes } from "../../types/dto/ddragon/versions";

export const getVersionsDTO = (api: DDragonAPI): VersionsTypes.DTO => ({
    latest: async (): Promise<VersionsTypes.GameVersion> => {
        const versions: VersionsTypes.GameVersions = await api.ddragonRequest(
            VersionsTypes.RestEndpoint.all
        );
        return versions[0];
    },
    all: (): Promise<VersionsTypes.GameVersions> =>
        api.ddragonRequest(VersionsTypes.RestEndpoint.all),
});
