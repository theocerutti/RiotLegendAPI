import { DTOEndpoint } from "../dto";

export namespace VersionTypes {
    export type GameVersion = string;
    export type GameVersions = Array<GameVersion>;
    export const RestEndpoint: DTOEndpoint<DTO> = {
        latest: {
            method: "GET",
            repertory: "/api/versions.json",
        },
        all: {
            method: "GET",
            repertory: "/api/versions.json",
        },
    };

    export type DTO = {
        latest(): Promise<GameVersion>;
        all(): Promise<GameVersions>;
    };
}
