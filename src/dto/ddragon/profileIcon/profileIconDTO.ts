import DDragonAPI from "../../../api/DDragonAPI";
import DTO from "../DTO";
import { ProfileIconTypes } from "../../../types/dto/ddragon/profileIcon/profileiconDTO";
import ProfileIcons from "./profileIcons";

class ProfileIconDTO extends DTO implements ProfileIconTypes.DTO {
    constructor(api: DDragonAPI) {
        super(api);
    }

    async all(version?, locale?): Promise<ProfileIcons> {
        const versionReq = version || (await this.api.versions.latest());
        const localeReq = locale || this.api.regionFallback.locale;
        const icons: ProfileIconTypes.APIResponse =
            await this.api.ddragonRequest(ProfileIconTypes.RestEndpoint.all, {
                version: versionReq,
                locale: localeReq,
            });
        return new ProfileIcons(this.api, localeReq, versionReq, icons);
    }
}

export default ProfileIconDTO;
