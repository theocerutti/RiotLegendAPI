import { ChampionTypes } from "../../ddragon/champion/championDTO";
import { DTOEndpoint } from "../../dto";
import { RegionName } from "../../../endpoints";
import { SummonerTypes } from "../summoner/summonerDTO";

export namespace ChampionRotationTypes {
    export type ChampionRotationAPIResponse = {
        freeChampionIds: Array<ChampionTypes.ChampionID>;
        freeChampionIdsForNewPlayers: Array<ChampionTypes.ChampionID>;
        maxNewPlayerLevel: SummonerTypes.SummonerLevel;
    };

    export const RestEndpoint: DTOEndpoint<DTO> = {
        getChampionRotations: {
            method: "GET",
            repertory: "/lol/platform/v3/champion-rotations",
        },
    };

    export interface DTO {
        getChampionRotations(region?: RegionName);
    }
}
