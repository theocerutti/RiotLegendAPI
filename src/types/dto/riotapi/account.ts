import { DTOEndpoint } from "../dto";
import { Summoner } from "./summoner";

export namespace Account {
    export const RestEndpoint: DTOEndpoint<DTO> = {
        byPuuid: {
            method: "POST",
            repertory: "/riot/account/v1/accounts/by-puuid/:puuid",
        },
    };

    export type DTO = {
        byPuuid(puuid: Summoner.PUUID): Promise<number>;
    };
}
