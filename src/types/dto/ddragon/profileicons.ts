import { DTOEndpoint } from "../dto";
import { Image } from "./image";
import { Locale } from "../../ddragon";
import ProfileIcons from "../../../dto/ddragon/class/profileicons";
import { VersionTypes } from "./versions";

export namespace ProfileIconsTypes {
    export type APIResponseHeader = {
        type: string;
        version: VersionTypes.GameVersion;
    };

    export type APIResponse = {
        data: { [key: string]: ProfileImage };
    } & APIResponseHeader;

    export type ProfileImage = {
        id: number;
        image: Image;
    };

    export const RestEndpoint: DTOEndpoint<DTO> = {
        all: {
            method: "GET",
            repertory: "/cdn/:version/data/:locale/profileicon.json",
        },
    };

    export type DTO = {
        all(
            version?: VersionTypes.GameVersion,
            locale?: Locale
        ): Promise<ProfileIcons>;
    };
}
