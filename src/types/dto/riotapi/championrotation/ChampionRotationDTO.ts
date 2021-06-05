import { ChampionsTypes } from "../../ddragon/champions";
import { DTOEndpoint } from "../../dto";
import { RegionName } from "../../../endpoints";
import { SummonerTypes } from "../summoner/summonerDTO";

export namespace ChampionRotationTypes {
    export type ChampionRotationAPIResponse = {
        freeChampionIds: Array<ChampionsTypes.ChampionID>;
        freeChampionIdsForNewPlayers: Array<ChampionsTypes.ChampionID>;
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
