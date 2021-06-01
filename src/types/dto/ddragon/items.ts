import { DTOEndpoint } from "../dto";
import { Image } from "./image";
import ItemsClass from "../../../dto/ddragon/class/items";
import { Locale } from "../../ddragon";
import { VersionsTypes } from "./versions";

export namespace ItemsTypes {
    export type APIResponseHeader = {
        type: string;
        version: VersionsTypes.GameVersion;
        basic: {
            name: string;
            rune: {
                isrune: boolean;
                tier: number;
                type: string;
            };
            gold: Prices;
            group: string;
            description: string;
            colloq: string;
            plaintext: string;
            consumed: boolean;
            stacks: number;
            depth: number;
            consumeOnFull: boolean;
            from: Array<any>;
            into: Array<any>;
            specialRecipe: number;
            inStore: boolean;
            hideFromAll: boolean;
            requiredChampion: string;
            requiredAlly: string;
            stats: {
                FlatHPPoolMod: number;
                rFlatHPModPerLevel: number;
                FlatMPPoolMod: number;
                rFlatMPModPerLevel: number;
                PercentHPPoolMod: number;
                PercentMPPoolMod: number;
                FlatHPRegenMod: number;
                rFlatHPRegenModPerLevel: number;
                PercentHPRegenMod: number;
                FlatMPRegenMod: number;
                rFlatMPRegenModPerLevel: number;
                PercentMPRegenMod: number;
                FlatArmorMod: number;
                rFlatArmorModPerLevel: number;
                PercentArmorMod: number;
                rFlatArmorPenetrationMod: number;
                rFlatArmorPenetrationModPerLevel: number;
                rPercentArmorPenetrationMod: number;
                rPercentArmorPenetrationModPerLevel: number;
                FlatPhysicalDamageMod: number;
                rFlatPhysicalDamageModPerLevel: number;
                PercentPhysicalDamageMod: number;
                FlatMagicDamageMod: number;
                rFlatMagicDamageModPerLevel: number;
                PercentMagicDamageMod: number;
                FlatMovementSpeedMod: number;
                rFlatMovementSpeedModPerLevel: number;
                PercentMovementSpeedMod: number;
                rPercentMovementSpeedModPerLevel: number;
                FlatAttackSpeedMod: number;
                PercentAttackSpeedMod: number;
                rPercentAttackSpeedModPerLevel: number;
                rFlatDodgeMod: number;
                rFlatDodgeModPerLevel: number;
                PercentDodgeMod: number;
                FlatCritChanceMod: number;
                rFlatCritChanceModPerLevel: number;
                PercentCritChanceMod: number;
                FlatCritDamageMod: number;
                rFlatCritDamageModPerLevel: number;
                PercentCritDamageMod: number;
                FlatBlockMod: number;
                PercentBlockMod: number;
                FlatSpellBlockMod: number;
                rFlatSpellBlockModPerLevel: number;
                PercentSpellBlockMod: number;
                FlatEXPBonus: number;
                PercentEXPBonus: number;
                rPercentCooldownMod: number;
                rPercentCooldownModPerLevel: number;
                rFlatTimeDeadMod: number;
                rFlatTimeDeadModPerLevel: number;
                rPercentTimeDeadMod: number;
                rPercentTimeDeadModPerLevel: number;
                rFlatGoldPer1numberMod: number;
                rFlatMagicPenetrationMod: number;
                rFlatMagicPenetrationModPerLevel: number;
                rPercentMagicPenetrationMod: number;
                rPercentMagicPenetrationModPerLevel: number;
                FlatEnergyRegenMod: number;
                rFlatEnergyRegenModPerLevel: number;
                FlatEnergyPoolMod: number;
                rFlatEnergyModPerLevel: number;
                PercentLifeStealMod: number;
                PercentSpellVampMod: number;
            };
            tags: Array<any>;
            maps: {
                1: boolean;
                8: boolean;
                10: boolean;
                12: boolean;
            };
        };
        groups: Array<Group>;
        tree: Array<Tree>;
    };

    export type APIResponse = {
        data: { [key: string]: Item };
    } & APIResponseHeader;

    export type Group = {
        id: string;
        MaxGroupOwnable: string;
    };

    export type Tree = {
        header: string;
        tags: Array<string>;
    };

    export type Item = {
        name: string;
        description: string;
        colloq: string;
        plaintext: string;
        into: Array<string>;
        image: Image;
        gold: Prices;
        tags: Array<string>;
        maps: {
            11: boolean;
            12: boolean;
            21: boolean;
            22: boolean;
        };
        stats: {
            FlatMovementSpeedMod: number;
        };
    };

    export type Prices = {
        base: number;
        purchasable: boolean;
        total: number;
        sell: number;
    };

    export const RestEndpoint: DTOEndpoint<DTO> = {
        all: {
            method: "GET",
            endpoint: "/cdn/:version/data/:locale/item.json",
        },
    };

    export type DTO = {
        all(
            version?: VersionsTypes.GameVersion,
            locale?: Locale
        ): Promise<ItemsClass>;
    };
}
