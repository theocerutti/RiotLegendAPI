import ChampionClass from "../../../dto/ddragon/class/champion";
import { DTOEndpoint } from "../dto";
import { Image } from "./image";
import { Locale } from "../../ddragon";
import { VersionsTypes } from "./versions";

export namespace ChampionsTypes {
    export type APIResponseHeader = {
        type: string;
        format: string;
        version: VersionsTypes.GameVersion;
    };

    export type APIResponse = {
        data: { [key: string]: Champion };
    } & APIResponseHeader;

    export type Spell = {
        id: string;
        name: string;
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

    export type Info = {
        attack: number;
        defense: number;
        magic: number;
        difficulty: number;
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

    export type Champion = {
        id: string;
        key: string;
        name: string;
        title: string;
        image: Image;
        skins: Array<Skin>;
        lore: string;
        blurb: string;
        allytips: Array<string>;
        enemytips: Array<string>;
        tags: Array<string>;
        partype: string;
        info: Info;
        stats: Stats;
        spells: Array<Spell>;
        passive: Passive;
        recommended: Array<any>;
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
    };

    export type DTO = {
        all(
            version?: VersionsTypes.GameVersion,
            locale?: Locale
        ): Promise<Array<ChampionClass>>;
        getByChampionName(
            championName: string,
            version?: VersionsTypes.GameVersion,
            locale?: Locale
        ): Promise<ChampionClass>;
    };
}
