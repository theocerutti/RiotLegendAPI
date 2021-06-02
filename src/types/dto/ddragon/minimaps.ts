import { RIOT_STATIC_ASSETS } from "../../../constants/constants";
import { DTOEndpoint } from "../dto";
import Minimaps from "../../../dto/ddragon/class/minimaps";

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
            baseUrl: RIOT_STATIC_ASSETS,
            repertory: "/docs/lol/maps.json",
        },
    };

    export type DTO = {
        all(): Promise<Minimaps>;
    };
}
