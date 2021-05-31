import { DTOEndpoint } from "../dto";
import { Locale } from "../../ddragon";
import { Versions } from "./versions";

export namespace Champions {
    export type ChampionsResponse = {
        type: string;
        format: string;
        version: Versions.GameVersion;
        data: { [key: string]: Champion };
    };

    export type Image = {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
    };

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
        num: string;
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
            endpoint: "/cdn/:version/data/:locale/champion.json",
        },
        getByChampionName: {
            method: "GET",
            endpoint: "/cdn/:version/data/:locale/champion/:championName.json",
        },
    };

    export type DTO = {
        all(
            version?: Versions.GameVersion,
            locale?: Locale
        ): Promise<ChampionsResponse>;
        getByChampionName(
            championName: string,
            version?: Versions.GameVersion,
            locale?: Locale
        ): Promise<Champion>;
    };
}
