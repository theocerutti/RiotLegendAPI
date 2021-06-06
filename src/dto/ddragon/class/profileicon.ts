import { DDRAGON_API_URL } from "../../../constants/constants";
import { ProfileIconsTypes } from "../../../types/dto/ddragon/profileicons";
import { VersionTypes } from "../../../types/dto/ddragon/versions";

class ProfileIcon {
    private readonly image: ProfileIconsTypes.ProfileImage;

    private readonly version: VersionTypes.GameVersion;

    constructor(
        profileIcon: ProfileIconsTypes.ProfileImage,
        version: VersionTypes.GameVersion
    ) {
        this.image = profileIcon;
        this.version = version;
    }

    get url(): string {
        return `${DDRAGON_API_URL}/cdn/${this.version}/img/profileicon/${this.image.id}.png`;
    }

    get data(): ProfileIconsTypes.ProfileImage {
        return this.image;
    }
}

export default ProfileIcon;
