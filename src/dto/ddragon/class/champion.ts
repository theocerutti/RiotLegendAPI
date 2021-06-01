import { ChampionsTypes } from "../../../types/dto/ddragon/champions";
import { DDRAGON_API_URL } from "../../../constants/constants";

// TODO: interpreting spell texts + add layer to get datas with ease
class Champion {
    readonly metadataChampion: ChampionsTypes.APIResponseHeader;

    readonly dataChampion: ChampionsTypes.Champion;

    constructor(
        championRes: ChampionsTypes.Champion,
        championResHeader: ChampionsTypes.APIResponseHeader
    ) {
        this.metadataChampion = championResHeader;
        this.dataChampion = championRes;
    }

    private getAssetUrl(
        skinNumber: number,
        type: "splash" | "loading"
    ): string {
        if (skinNumber < 0 || skinNumber > this.dataChampion.skins.length)
            throw new Error(
                `${
                    this.dataChampion.id || "This Champion"
                } doesn't have skin°${skinNumber}.`
            );
        return `${DDRAGON_API_URL}/cdn/img/champion/${type}/${this.dataChampion.id}_${skinNumber}.jpg`;
    }

    getSplashAssetUrl(skinNumber: number = 0): string {
        return this.getAssetUrl(skinNumber, "splash");
    }

    getAllSplashAssetUrl(): Array<string> {
        return this.dataChampion.skins.map((skin) =>
            this.getAssetUrl(skin.num, "splash")
        );
    }

    getLoadingAssetUrl(skinNumber: number = 0): string {
        return this.getAssetUrl(skinNumber, "loading");
    }

    getAllLoadingAssetUrl(): Array<string> {
        return this.dataChampion.skins.map((skin) =>
            this.getAssetUrl(skin.num, "loading")
        );
    }

    getSquareAssetUrl(): string {
        return `${DDRAGON_API_URL}/cdn/${this.metadataChampion.version}/img/champion/${this.dataChampion.image.full}.png`;
    }

    getPassiveAssetUrl(): string {
        return `http://ddragon.leagueoflegends.com/cdn/11.11.1/img/passive/${this.dataChampion.passive.image.full}`;
    }

    getAbilityAssetUrl(id: string): string {
        const spellIndex: number = this.dataChampion.spells.findIndex(
            (spell) => spell.id === id
        );

        if (spellIndex < 0 || spellIndex > this.dataChampion.spells.length)
            throw new Error(`Can't find Ability Asset with ID: ${id}`);
        return `${DDRAGON_API_URL}/cdn/${this.metadataChampion.version}/img/spell/${this.dataChampion.spells[spellIndex].image.full}`;
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
        return `${DDRAGON_API_URL}/cdn/${this.metadataChampion.version}/img/sprite/${this.dataChampion.image.sprite}`;
    }

    get metadata(): ChampionsTypes.APIResponseHeader {
        return this.metadataChampion;
    }

    get data(): ChampionsTypes.Champion {
        return this.dataChampion;
    }
}

export default Champion;
