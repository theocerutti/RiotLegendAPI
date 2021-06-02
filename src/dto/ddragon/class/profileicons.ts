import ProfileIcon from "./profileicon";
import { ProfileIconsTypes } from "../../../types/dto/ddragon/profileicons";

class ProfileIcons {
    readonly profileIconsRawData: ProfileIconsTypes.APIResponse;

    readonly profileIcons: Array<ProfileIcon> = [];

    constructor(profileIcons: ProfileIconsTypes.APIResponse) {
        this.profileIconsRawData = profileIcons;
        this.profileIcons = Object.keys(profileIcons.data).map(
            (iconID) =>
                new ProfileIcon(profileIcons.data[iconID], profileIcons.version)
        );
    }

    getByID(id: string | number): ProfileIcon | null {
        let parsedId = id;

        if (typeof id === "string") parsedId = parseInt(id, 10);
        for (let i = 0; i < this.profileIcons.length; i++) {
            if (this.profileIcons[i].data.id === parsedId) {
                return this.profileIcons[i];
            }
        }
        return null;
    }

    get metadata(): ProfileIconsTypes.APIResponseHeader {
        return {
            type: this.profileIconsRawData.type,
            version: this.profileIconsRawData.version,
        };
    }

    get icons(): Array<ProfileIcon> {
        return this.profileIcons;
    }

    get rawData(): { [key: string]: ProfileIconsTypes.ProfileImage } {
        return this.profileIconsRawData.data;
    }
}

export default ProfileIcons;
