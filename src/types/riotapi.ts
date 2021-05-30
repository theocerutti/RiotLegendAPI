import { RestEndpoint, RiotToken } from "./api";
import { PlatformName } from "./endpoints";
import Redis from "ioredis";
import { Summoner } from "./summoner";

export interface IRiotAPI {
    request<T>(
        platform: PlatformName,
        restEndpoint: RestEndpoint,
        restEndpointData?: { [key: string]: string | number }
    ): Promise<T>;
    readonly config: RiotAPIConfig;

    // DTOs accessors
    readonly summoner: Summoner.DTO;
    /* readonly account: Account.DTO;
        champion(): ChampionDTO;
    clash(): ClashDTO;
    league(): LeagueDTO;
    serverStatus(): ServerStatusDTO;
    spectator(): SpectatorDTO;
    match(): MatchDTO;
    tft(): {
        league(): TFTLeagueDTO;
        match(): TFTMatchDTO;
        summoner(): TFTSummonerDTO;
    }; */
}

export type RiotAPIConfig = {
    riotToken: RiotToken;
    cache?: {
        cacheType: "local" | "ioredis";
        client?: Redis.RedisOptions | string;
        expiration?: number;
    };
};
