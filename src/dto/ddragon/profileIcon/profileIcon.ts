import { DDRAGON_API_URL } from "../../../constants/constants";
import DDragonAPI from "../../../api/DDragonAPI";
import DDragonBaseModel from "../DDragonBaseModel";
import { Locale } from "../../../types/ddragon";
import { ProfileIconTypes } from "../../../types/dto/ddragon/profileicons";
import { VersionTypes } from "../../../types/dto/ddragon/version/versionDTO";

class ProfileIcon extends DDragonBaseModel<ProfileIconTypes.ProfileIcon> {
    constructor(
        api: DDragonAPI,
        locale: Locale,
        version: VersionTypes.GameVersion,
        profileIcon: ProfileIconTypes.ProfileIcon
    ) {
        super(api, locale, version, profileIcon);
    }

    get url(): string {
        return `${DDRAGON_API_URL}/cdn/${this.version}/img/profileicon/${this.data.id}.png`;
    }
}

export default ProfileIcon;
