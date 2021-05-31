import { DTOEndpoint } from "../dto";
import { GameVersions } from "../../ddragon";

export namespace Versions {
    export const RestEndpoint: DTOEndpoint<DTO> = {
        getAllGameVersions: {
            method: "GET",
            endpoint: "/api/versions.json",
        },
    };

    export type DTO = {
        getAllGameVersions(): Promise<GameVersions>;
    };
}
