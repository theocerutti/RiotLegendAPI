import { RestEndpoint, RiotToken } from "./api";
import Redis from "ioredis";
import { RoutingName } from "./endpoints";
import { Summoner } from "./summoner";

export interface IRiotAPI {
    readonly config: RiotAPIConfig;
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
    request<T>(
        routingName: RoutingName,
        restEndpoint: RestEndpoint,
        restEndpointData?: { [key: string]: string | number }
    ): Promise<T>;
}

export type RiotAPIConfig = {
    routingName: RoutingName;
    riotToken: RiotToken;
    cache?: {
        cacheType: "local" | "ioredis";
        client?: Redis.RedisOptions | string;
        expiration?: number;
    };
};
