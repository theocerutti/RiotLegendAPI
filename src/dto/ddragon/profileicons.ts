import DDragonAPI from "../../api/DDragonAPI";
import ProfileIcons from "./class/profileicons";
import { ProfileIconsTypes } from "../../types/dto/ddragon/profileicons";

export const getProfileIconsDTO = (api: DDragonAPI): ProfileIconsTypes.DTO => ({
    all: async (version?, locale?): Promise<ProfileIcons> => {
        const res: ProfileIconsTypes.APIResponse = await api.ddragonRequest(
            ProfileIconsTypes.RestEndpoint.all,
            {
                version: version || (await api.versions.latest()),
                locale: locale || api.regionFallback.locale,
            }
        );
        return new ProfileIcons(res);
    },
});
