import { AccessToken } from "./api";
import { DTOEndpoint } from "./dto";
import { RegionName } from "./endpoints";

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
        getByAccountID: {
            method: "GET",
            endpoint: "/lol/summoner/v4/summoners/by-account/:accountID",
        },
        getByName: {
            method: "GET",
            endpoint: "/lol/summoner/v4/summoners/by-name/:name",
        },
        getByPUUID: {
            method: "GET",
            endpoint: "/lol/summoner/v4/summoners/by-puuid/:puuid",
        },
        getByID: {
            method: "GET",
            endpoint: "/lol/summoner/v4/summoners/:id",
        },
        getMe: {
            method: "GET",
            endpoint: "/riot/account/v1/accounts/me",
        },
    };

    export type DTO = {
        getByAccountID(
            region: RegionName,
            accountID: AccountID
        ): Promise<Summoner>;
        getByName(region: RegionName, name: Name): Promise<Summoner>;
        getByPUUID(region: RegionName, puuid: PUUID): Promise<Summoner>;
        getByID(region: RegionName, id: ID): Promise<Summoner>;
        getMe(region: RegionName, accessToken: AccessToken): Promise<Summoner>;
    };
}
