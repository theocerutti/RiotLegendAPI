import { AccessToken } from "../../../api";
import { DTOEndpoint } from "../../dto";
import { RegionName } from "../../../endpoints";
import SummonerClass from "../../../../dto/riotapi/summoner/Summoner";

export namespace SummonerTypes {
    export type ID = string;
    export type AccountID = string;
    export type PUUID = string;
    export type Name = string;
    export type ProfileIconID = number;
    export type RevisionDate = number;
    export type SummonerLevel = number;

    export type SummonerAPIResponse = {
        /* Encrypted account ID. Max length 56 characters. */
        id: ID;
        /* Encrypted summoner ID. Max length 63 characters. */
        accountId: AccountID;
        /* Encrypted PUUID. Exact length of 78 characters. */
        puuid: PUUID;
        /* Summoner name. */
        name: Name;
        /* ID of the summoner icon associated with the summoner. */
        profileIconId: ProfileIconID;
        /*
            Date summoner was last modified specified as epoch milliseconds.
            The following events will update this timestamp: summoner name change, summoner level change, or profile icon change.
        */
        revisionDate: RevisionDate;
        /* Summoner level associated with the summoner. */
        summonerLevel: SummonerLevel;
    };

    export const RestEndpoint: DTOEndpoint<DTO> = {
        getByAccountID: {
            method: "GET",
            repertory: "/lol/summoner/v4/summoners/by-account/:accountID",
        },
        getByName: {
            method: "GET",
            repertory: "/lol/summoner/v4/summoners/by-name/:name",
        },
        getByPUUID: {
            method: "GET",
            repertory: "/lol/summoner/v4/summoners/by-puuid/:puuid",
        },
        getByID: {
            method: "GET",
            repertory: "/lol/summoner/v4/summoners/:id",
        },
        getMe: {
            method: "GET",
            repertory: "/riot/account/v1/accounts/me",
        },
    };

    export interface DTO {
        getByAccountID(
            accountID: AccountID,
            region?: RegionName
        ): Promise<SummonerClass>;
        getByName(name: Name, region?: RegionName): Promise<SummonerClass>;
        getByPUUID(puuid: PUUID, region?: RegionName): Promise<SummonerClass>;
        getByID(id: ID, region?: RegionName): Promise<SummonerClass>;
        getMe(
            accessToken: AccessToken,
            region?: RegionName
        ): Promise<SummonerClass>;
    }
}
