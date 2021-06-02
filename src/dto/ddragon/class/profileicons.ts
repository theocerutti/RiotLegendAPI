import { ProfileIconsTypes } from "../../../types/dto/ddragon/profileicons";

class ProfileIcons {
    readonly profileIcons: ProfileIconsTypes.APIResponse;

    constructor(profileIcons: ProfileIconsTypes.APIResponse) {
        this.profileIcons = profileIcons;
    }

    getByID(id: string): ProfileIconsTypes.ProfileImage {
        if (!Object.prototype.hasOwnProperty.call(this.profileIcons.data, id)) {
            throw new Error(`Profile Icon with ID=${id} doesn't exists!`);
        }
        return this.profileIcons.data[id];
    }

    get metadata(): ProfileIconsTypes.APIResponseHeader {
        return {
            type: this.profileIcons.type,
            version: this.profileIcons.version,
        };
    }

    get data(): { [key: string]: ProfileIconsTypes.ProfileImage } {
        return this.profileIcons.data;
    }
}

export default ProfileIcons;
