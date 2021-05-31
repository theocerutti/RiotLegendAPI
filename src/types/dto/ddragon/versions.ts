import { DTOEndpoint } from "../dto";

export namespace Versions {
    export type GameVersion = string;
    export type GameVersions = Array<GameVersion>;
    export const RestEndpoint: DTOEndpoint<DTO> = {
        latest: {
            method: "GET",
            endpoint: "/api/versions.json",
        },
        all: {
            method: "GET",
            endpoint: "/api/versions.json",
        },
    };

    export type DTO = {
        latest(): Promise<GameVersion>;
        all(): Promise<GameVersions>;
    };
}
