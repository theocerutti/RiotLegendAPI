import { DTOEndpoint } from "./dto";

export namespace Summoner {
    export type ID = string;
    export type AccountID = string;
    export type PUUID = string;
    export type Name = string;
    export type ProfileIconID = number;
    export type RevisionDate = number;
    export type SummonerLevel = number;

    export type Summoner = {
        id: ID;
        accountId: AccountID;
        puuid: PUUID;
        name: Name;
        profileIconId: ProfileIconID;
        revisionDate: RevisionDate;
        summonerLevel: SummonerLevel;
    };

    export const RestEndpoint: DTOEndpoint<DTO> = {
        byAccountID: {
            method: "GET",
            endpoint: "/lol/summoner/v4/summoners/by-account/:accountID",
        },
        byName: {
            method: "GET",
            endpoint: "/lol/summoner/v4/summoners/by-name/:name",
        },
        byPUUID: {
            method: "GET",
            endpoint: "/lol/summoner/v4/summoners/by-puuid/:puuid",
        },
        byID: {
            method: "GET",
            endpoint: "/lol/summoner/v4/summoners/:id",
        },
    };

    export type DTO = {
        byAccountID(accountID: AccountID): Promise<Summoner>;
        byName(name: Name): Promise<Summoner>;
        byPUUID(puuid: PUUID): Promise<Summoner>;
        byID(id: ID): Promise<Summoner>;
    };
}
