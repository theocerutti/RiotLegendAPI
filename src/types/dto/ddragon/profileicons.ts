import { DTOEndpoint } from "../dto";
import { Image } from "./image";
import { Locale } from "../../ddragon";
import ProfileIcons from "../../../dto/ddragon/profileIcon/profileIcons";
import { VersionTypes } from "./version/versionDTO";

export namespace ProfileIconTypes {
    export type APIResponseHeader = {
        type: string;
        version: VersionTypes.GameVersion;
    };

    export type APIResponse = {
        data: { [key: string]: ProfileIcon };
    } & APIResponseHeader;

    export type ProfileIcon = {
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
