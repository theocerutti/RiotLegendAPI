import { Champions } from "./champions";
import { DDRAGON_API_URL } from "../../../constants/constants";
import ChampionsResponse = Champions.ChampionsResponse;

class Champion {
    readonly rawDataChampion: ChampionsResponse;

    readonly dataChampion: Champions.Champion;

    constructor(championResponse: ChampionsResponse) {
        this.rawDataChampion = championResponse;
        this.dataChampion =
            championResponse.data[Object.keys(championResponse.data)[0]];
    }

    private getAssetUrl(skinNumber: number, type: "splash" | "loading") {
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
        return `${DDRAGON_API_URL}/cdn/${this.rawDataChampion.version}/img/champion/${this.dataChampion.image.full}.png`;
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
        return `${DDRAGON_API_URL}/cdn/${this.rawDataChampion.version}/img/spell/${this.dataChampion.spells[spellIndex].image.full}`;
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

    get rawData() {
        return this.rawDataChampion;
    }

    get data() {
        return this.dataChampion;
    }
}

export default Champion;
