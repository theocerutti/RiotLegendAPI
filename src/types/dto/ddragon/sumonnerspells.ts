import { DTOEndpoint } from "../dto";
import { Image } from "./image";
import { Locale } from "../../ddragon";
import SummonerSpellsClass from "../../../dto/ddragon/class/summonerspells";
import { VersionsTypes } from "./versions";

export namespace SummonerSpellsTypes {
    export type APIResponseHeader = {
        type: string;
        version: VersionsTypes.GameVersion;
    };

    export type APIResponse = {
        data: {
            [key: string]: SummonerSpell;
        };
    } & APIResponseHeader;

    export type SummonerSpell = {
        id: string;
        name: string;
        description: string;
        tooltip: string;
        maxrank: number;
        cooldown: Array<number>;
        cooldownBurn: string;
        cost: Array<number>;
        costBurn: string;
        dataValues: { [key: string]: any };
        effect: Array<Array<number> | null>;
        effectBurn: Array<string | null>;
        vars: Array<any>;
        key: string;
        summonerLevel: number;
        modes: Array<string>;
        costType: string;
        maxammo: string;
        range: Array<number>;
        rangeBurn: string;
        image: Image;
        resource: string;
    };

    export const RestEndpoint: DTOEndpoint<DTO> = {
        all: {
            method: "GET",
            repertory: "/cdn/:version/data/:locale/summoner.json",
        },
    };

    export type DTO = {
        all(
            version?: VersionsTypes.GameVersion,
            locale?: Locale
        ): Promise<SummonerSpellsClass>;
    };
}
