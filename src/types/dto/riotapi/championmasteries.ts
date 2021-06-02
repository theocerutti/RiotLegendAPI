import { ChampionsTypes } from "../ddragon/champions";
import { DTOEndpoint } from "../dto";
import { RegionName } from "../../endpoints";
import { SummonerTypes } from "./summoner";

export namespace ChampionMasteriesTypes {
    export type ChampionMastery = {
        /* Number of points needed to achieve next level. Zero if player reached maximum champion level for this champion. */
        championPointsUntilNextLevel: number;
        /* Is chest granted for this champion or not in current season. */
        chestGranted: boolean;
        /* Champion ID for this entry. */
        championId: number;
        /* Last time this champion was played by this player - in Unix milliseconds time format. */
        lastPlayTime: number;
        /* Champion level for specified player and champion combination. */
        championLevel: number;
        /* Summoner ID for this entry. (Encrypted) */
        summonerId: string;
        /* Total number of champion points for this player and champion combination - they are used to determine championLevel. */
        championPoints: number;
        /* Number of points earned since current level has been achieved. */
        championPointsSinceLastLevel: number;
        /* The token earned for this champion at the current championLevel. When the championLevel is advanced the tokensEarned resets to 0. */
        tokensEarned: number;
    };

    export const RestEndpoint: DTOEndpoint<DTO> = {
        getByAccountID: {
            method: "GET",
            repertory:
                "/lol/champion-mastery/v4/champion-masteries/by-summoner/:accountID",
        },
        getByChampion: {
            method: "GET",
            repertory:
                "/lol/champion-mastery/v4/champion-masteries/by-summoner/:accountID/by-champion/:championID",
        },
        getTotalScore: {
            method: "GET",
            repertory: "/lol/champion-mastery/v4/scores/by-summoner/:accountID",
        },
    };

    export type DTO = {
        getByAccountID(
            accountID: SummonerTypes.AccountID,
            region?: RegionName
        ): Promise<Array<ChampionMastery>>;
        getByChampion(
            accountID: SummonerTypes.AccountID,
            championID: ChampionsTypes.ChampionID,
            region?: RegionName
        ): Promise<ChampionMastery>;
        getTotalScore(
            accountID: SummonerTypes.AccountID,
            region?: RegionName
        ): Promise<number>;
    };
}
