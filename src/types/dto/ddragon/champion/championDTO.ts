import ChampionClass from "../../../../dto/ddragon/champion/champion";
import ChampionShardClass from "../../../../dto/ddragon/champion/championShard";
import { DTOEndpoint } from "../../dto";
import { Image } from "../image";
import { Locale } from "../../../ddragon";
import { VersionTypes } from "../versions";

export namespace ChampionTypes {
    export type APIResponseHeader = {
        type: string;
        format: string;
        version: VersionTypes.GameVersion;
    };

    export type APIResponseShardChampion = {
        data: { [key: string]: ChampionShard };
    } & APIResponseHeader;

    export type APIResponseCompleteChampion = {
        data: { [key: string]: Champion };
    } & APIResponseHeader;

    export type Name = string;

    export type Spell = {
        id: string;
        name: Name;
        description: string;
        tooltip: string;
        leveltip: {
            label: Array<string>;
            effect: Array<string>;
        };
        maxrank: number;
        cooldown: Array<number>;
        cooldownBurn: string;
        cost: Array<number>;
        costBurn: string;
        datavalues: { [key: string]: any };
        effect: Array<Array<number | null>>;
        effectBurn: Array<string | null>;
        vars: Array<any>;
        costType: string;
        maxammo: string;
        range: Array<number>;
        rangeBurn: string;
        image: Image;
        resource: string;
    };

    export type Skin = {
        id: string;
        num: number;
        name: string;
        chromas: boolean;
    };

    export type Passive = {
        name: string;
        description: string;
        image: Image;
    };

    export type ChampionDifficultyLevel = number;

    export type Info = {
        attack: number;
        defense: number;
        magic: number;
        difficulty: ChampionDifficultyLevel;
    };

    export type Stats = {
        hp: number;
        hpperlevel: number;
        mp: number;
        mpperlevel: number;
        armor: number;
        armorperlevel: number;
        spellblock: number;
        spellblockperlevel: number;
        attackrange: number;
        hpregen: number;
        hpregenperlevel: number;
        mpregen: number;
        mpregenperlevel: number;
        crit: number;
        critperlevel: number;
        attackdamage: number;
        attackdamageperlevel: number;
        attackspeedperlevel: number;
        attackspeed: number;
    };

    export type ChampionID = string;

    export type Champion = {
        skins: Array<Skin>;
        lore: string;
        allytips: Array<string>;
        enemytips: Array<string>;
        partype: string;
        spells: Array<Spell>;
        passive: Passive;
        recommended: Array<any>;
    } & ChampionBase;

    export type ChampionShard = {
        version: VersionTypes.GameVersion;
    } & ChampionBase;

    export type ChampionBase = {
        id: ChampionID;
        key: string;
        name: string;
        title: string;
        image: Image;
        blurb: string;
        tags: Array<string>;
        partype: string;
        info: Info;
        stats: Stats;
    };

    export const RestEndpoint: DTOEndpoint<DTO> = {
        all: {
            method: "GET",
            repertory: "/cdn/:version/data/:locale/champion.json",
        },
        getByChampionName: {
            method: "GET",
            repertory: "/cdn/:version/data/:locale/champion/:championName.json",
        },
        getByChampionID: {
            method: "GET",
            repertory: "/cdn/:version/data/:locale/champion.json",
        },
    };

    export interface DTO {
        all(
            version?: VersionTypes.GameVersion,
            locale?: Locale
        ): Promise<Array<ChampionShardClass>>;
        getByChampionName(
            championName: string,
            version?: VersionTypes.GameVersion,
            locale?: Locale
        ): Promise<ChampionClass>;
        getByChampionID(
            championID,
            version?,
            locale?
        ): Promise<ChampionShardClass>;
    }
}
