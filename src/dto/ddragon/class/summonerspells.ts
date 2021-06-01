import { SummonerSpellsTypes } from "../../../types/dto/ddragon/sumonnerspells";

// TODO: interpreting spell texts + add layer to get datas with ease
class SummonerSpells {
    readonly dataSummonerSpell: SummonerSpellsTypes.APIResponse;

    constructor(summonerSpell: SummonerSpellsTypes.APIResponse) {
        this.dataSummonerSpell = summonerSpell;
    }

    getByID(id: string): SummonerSpellsTypes.SummonerSpell {
        if (
            !Object.prototype.hasOwnProperty.call(
                this.dataSummonerSpell.data,
                id
            )
        ) {
            throw new Error(`Summoner Spell with ID=${id} doesn't exists!`);
        }
        return this.dataSummonerSpell.data[id];
    }

    get metadata(): SummonerSpellsTypes.APIResponseHeader {
        return {
            type: this.dataSummonerSpell.type,
            version: this.dataSummonerSpell.version,
        };
    }

    get data(): { [key: string]: SummonerSpellsTypes.SummonerSpell } {
        return this.dataSummonerSpell.data;
    }
}

export default SummonerSpells;
