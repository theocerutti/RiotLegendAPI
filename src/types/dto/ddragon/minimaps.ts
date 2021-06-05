import { DTOEndpoint } from "../dto";
import Minimaps from "../../../dto/ddragon/class/minimaps";
import { RIOT_STATIC_ASSETS_URL } from "../../../constants/constants";

export namespace MinimapTypes {
    export type APIResponse = Array<Minimap>;

    export type Minimap = {
        mapId: number;
        mapName: string;
        notes: string;
    };

    export const RestEndpoint: DTOEndpoint<DTO> = {
        all: {
            method: "GET",
            baseUrl: RIOT_STATIC_ASSETS_URL,
            repertory: "/docs/lol/maps.json",
        },
    };

    export type DTO = {
        all(): Promise<Minimaps>;
    };
}
