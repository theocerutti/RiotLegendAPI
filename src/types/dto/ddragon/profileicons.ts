import { DTOEndpoint } from "../dto";
import { Image } from "./image";
import { Locale } from "../../ddragon";
import ProfileIcons from "../../../dto/ddragon/class/profileicons";
import { VersionsTypes } from "./versions";

export namespace ProfileIconsTypes {
    export type APIResponseHeader = {
        type: string;
        version: VersionsTypes.GameVersion;
    };

    export type APIResponse = {
        data: { [key: string]: ProfileImage };
    } & APIResponseHeader;

    export type ProfileImage = {
        id: string;
        image: Image;
    };

    export const RestEndpoint: DTOEndpoint<DTO> = {
        all: {
            method: "GET",
            endpoint: "/cdn/:version/data/:locale/profileicon.json",
        },
    };

    export type DTO = {
        all(
            version?: VersionsTypes.GameVersion,
            locale?: Locale
        ): Promise<ProfileIcons>;
    };
}
