import DDragonAPI from "../../../api/DDragonAPI";
import DDragonBaseModel from "../DDragonBaseModel";
import { Locale } from "../../../types/ddragon";
import ProfileIcon from "./profileIcon";
import { ProfileIconTypes } from "../../../types/dto/ddragon/profileIcon/profileiconDTO";
import { VersionTypes } from "../../../types/dto/ddragon/version/versionDTO";

class ProfileIcons extends DDragonBaseModel<ProfileIconTypes.APIResponse> {
    constructor(
        api: DDragonAPI,
        locale: Locale,
        version: VersionTypes.GameVersion,
        profileIcons: ProfileIconTypes.APIResponse
    ) {
        super(api, locale, version, profileIcons);
    }

    getByID(id: string | number): ProfileIcon | null {
        let iconId = id;

        if (typeof id === "string") iconId = parseInt(id, 10);
        const isIdValid = Object.keys(this.data.data).some(
            (profileIconId) => profileIconId === iconId
        );
        if (!isIdValid) return null;
        return new ProfileIcon(
            this.api,
            this.locale,
            this.version,
            this.data.data[iconId]
        );
    }

    getAll(): Array<ProfileIcon> {
        return Object.keys(this.data.data).map((iconID) =>
            this.getByID(iconID)
        );
    }
}

export default ProfileIcons;
