import ChampionMasteryClass from "../../../../dto/riotapi/championmastery/ChampionMastery";
import { ChampionsTypes } from "../../ddragon/champions";
import { DTOEndpoint } from "../../dto";
import { RegionName } from "../../../endpoints";
import { SummonerTypes } from "../summoner/summonerDTO";
import { UtilsTypes } from "../../../utils";

export namespace ChampionMasteryTypes {
    export type MasteryPoint = number;
    export type IsChestGranted = boolean;
    export type MasteryToken = number;
    export type MasteryLevel = number;

    export type ChampionMasteryAPIResponse = {
        /* Total number of champion points for this player and champion combination - they are used to determine championLevel. */
        championPoints: MasteryPoint;
        /* Number of points needed to achieve next level. Zero if player reached maximum champion level for this champion. */
        championPointsUntilNextLevel: MasteryPoint;
        /* Number of points earned since current level has been achieved. */
        championPointsSinceLastLevel: MasteryPoint;
        /* Is chest granted for this champion or not in current season. */
        chestGranted: IsChestGranted;
        /* Champion ID for this entry. */
        championId: ChampionsTypes.ChampionID;
        /* Last time this champion was played by this player - in Unix milliseconds time format. */
        lastPlayTime: UtilsTypes.UnixTimestamp;
        /* Champion level for specified player and champion combination. */
        championLevel: MasteryLevel;
        /* Summoner ID for this entry. (Encrypted) */
        summonerId: SummonerTypes.ID;
        /* The token earned for this champion at the current championLevel. When the championLevel is advanced the tokensEarned resets to 0. */
        tokensEarned: MasteryToken;
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

    export interface DTO {
        getByAccountID(
            accountID: SummonerTypes.AccountID,
            region?: RegionName
        ): Promise<Array<ChampionMasteryClass>>;
        getByChampion(
            accountID: SummonerTypes.AccountID,
            championID: ChampionsTypes.ChampionID,
            region?: RegionName
        ): Promise<ChampionMasteryClass>;
        getTotalScore(
            accountID: SummonerTypes.AccountID,
            region?: RegionName
        ): Promise<number>;
    }
}
