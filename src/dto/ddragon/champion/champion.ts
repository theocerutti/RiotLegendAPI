import ChampionBase from "./championBase";
import { ChampionTypes } from "../../../types/dto/ddragon/champion/championDTO";
import { DDRAGON_API_URL } from "../../../constants/constants";
import DDragonAPI from "../../../api/DDragonAPI";
import { Locale } from "../../../types/ddragon";
import { VersionTypes } from "../../../types/dto/ddragon/version/versionDTO";

// TODO: interpreting spell texts + add layer to get datas with ease
class Champion extends ChampionBase {
    private readonly dataChampion: ChampionTypes.Champion;

    constructor(
        api: DDragonAPI,
        locale: Locale,
        version: VersionTypes.GameVersion,
        championRes: ChampionTypes.Champion
    ) {
        super(api, locale, version, championRes);
        this.dataChampion = championRes;
    }

    private getAssetUrl(
        skinNumber: number,
        type: "splash" | "loading"
    ): string | null {
        if (skinNumber < 0 || skinNumber > this.dataChampion.skins.length)
            return null;
        return `${DDRAGON_API_URL}/cdn/img/champion/${type}/${this.dataChampion.id}_${skinNumber}.jpg`;
    }

    getSplashAssetUrl(skinNumber: number = 0): string | null {
        return this.getAssetUrl(skinNumber, "splash");
    }

    getAllSplashAssetUrl(): Array<string> {
        return this.dataChampion.skins.map((skin) =>
            this.getAssetUrl(skin.num, "splash")
        );
    }

    getLoadingAssetUrl(skinNumber: number = 0): string | null {
        return this.getAssetUrl(skinNumber, "loading");
    }

    getAllLoadingAssetUrl(): Array<string> {
        return this.dataChampion.skins.map((skin) =>
            this.getAssetUrl(skin.num, "loading")
        );
    }

    getSquareAssetUrl(): string {
        return `${DDRAGON_API_URL}/cdn/${this.version}/img/champion/${this.dataChampion.image.full}.png`;
    }

    getPassiveAssetUrl(): string {
        return `http://ddragon.leagueoflegends.com/cdn/11.11.1/img/passive/${this.dataChampion.passive.image.full}`;
    }

    getAbilityAssetUrl(id: string): string | null {
        const spellIndex: number = this.dataChampion.spells.findIndex(
            (spell) => spell.id === id
        );

        if (spellIndex < 0 || spellIndex > this.dataChampion.spells.length)
            return null;
        return `${DDRAGON_API_URL}/cdn/${this.version}/img/spell/${this.dataChampion.spells[spellIndex].image.full}`;
    }

    getAllAbilityAssetUrl(): Array<string> {
        return this.dataChampion.spells.map((spell) =>
            this.getAbilityAssetUrl(spell.id)
        );
    }

    getQSpellAssetUrl(): string {
        return this.getAbilityAssetUrl(this.dataChampion.spells[0].id);
    }

    getWSpellAssetUrl(): string {
        return this.getAbilityAssetUrl(this.dataChampion.spells[1].id);
    }

    getESpellAssetUrl(): string {
        return this.getAbilityAssetUrl(this.dataChampion.spells[2].id);
    }

    getRSpellAssetUrl(): string {
        return this.getAbilityAssetUrl(this.dataChampion.spells[3].id);
    }

    getSpriteSheetUrl(): string {
        return `${DDRAGON_API_URL}/cdn/${this.version}/img/sprite/${this.dataChampion.image.sprite}`;
    }

    get data(): ChampionTypes.Champion {
        return this.dataChampion;
    }
}

export default Champion;
