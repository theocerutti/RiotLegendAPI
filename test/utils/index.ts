import { APIStatusTypes } from "../../src/types/dto/riotapi/apistatus/APIStatusDTO";
import { ChampionMasteryTypes } from "../../src/types/dto/riotapi/championmastery/ChampionMasteryDTO";
import { ChampionRotationTypes } from "../../src/types/dto/riotapi/championrotation/ChampionRotationDTO";
import { ChampionTypes } from "../../src/types/dto/ddragon/champion/championDTO";
import { ItemTypes } from "../../src/types/dto/ddragon/item/itemDTO";
import { MatchTypes } from "../../src/types/dto/riotapi/match/MatchDTO";
import { MinimapTypes } from "../../src/types/dto/ddragon/minimap/minimaps";
import { ProfileIconTypes } from "../../src/types/dto/ddragon/profileIcon/profileiconDTO";
import { SummonerSpellsTypes } from "../../src/types/dto/ddragon/summonerSpell/sumonnerspellDTO";
import { SummonerTypes } from "../../src/types/dto/riotapi/summoner/summonerDTO";

export const DEFAULT_SUMMONER_NAME = "Priciiix";
export const DEFAULT_REGION_NAME = "euw1";
export const DEFAULT_PLATFORM_NAME = "europe";

export const checkIfMinimapIsValid = (map: MinimapTypes.Minimap) => {
    expect(Object.keys(map).sort()).toEqual(
        ["mapId", "mapName", "notes"].sort()
    );
};

export const checkIfSummonerSpellIsValid = (
    summonerSpell: SummonerSpellsTypes.APIResponse
) => {
    expect(Object.keys(summonerSpell).sort()).toEqual(
        ["data", "type", "version"].sort()
    );
};

export const checkIfProfileIconsIsValid = (
    profileIcons: ProfileIconTypes.APIResponse
) => {
    expect(Object.keys(profileIcons).sort()).toEqual(
        ["type", "version", "data"].sort()
    );
};

export const checkIfProfileIconIsValid = (
    profileIcon: ProfileIconTypes.ProfileIcon
) => {
    expect(Object.keys(profileIcon).sort()).toEqual(["id", "image"].sort());
};

export const checkIfItemsIsValid = (items: ItemTypes.APIResponse) => {
    expect(Object.keys(items).sort()).toEqual(
        ["type", "version", "basic", "groups", "tree", "data"].sort()
    );
};

export const checkIfItemIsValid = (item: ItemTypes.Item) => {
    expect(Object.keys(item).sort()).toEqual(
        [
            "name",
            "description",
            "colloq",
            "plaintext",
            "into",
            "image",
            "gold",
            "tags",
            "maps",
            "stats",
        ].sort()
    );
};

export const checkIfMatchIsValid = (match: MatchTypes.Match) => {
    expect(Object.keys(match).sort()).toEqual(["info", "metadata"].sort());
};

export const checkIfMatchTimeLineIsValid = (
    matchTimeLine: MatchTypes.MatchTimeLine
) => {
    expect(Object.keys(matchTimeLine).sort()).toEqual(
        ["info", "metadata"].sort()
    );
};

export const checkIfAPIStatusIsValid = (
    apiStatus: APIStatusTypes.PlatformDataDTO
) => {
    expect(Object.keys(apiStatus).sort()).toEqual(
        ["id", "name", "locales", "maintenances", "incidents"].sort()
    );
};

export const checkIfChampionShardIsValid = (
    champion: ChampionTypes.ChampionShard
) => {
    expect(Object.keys(champion).sort()).toEqual(
        [
            "version",
            "id",
            "key",
            "name",
            "title",
            "image",
            "blurb",
            "tags",
            "partype",
            "info",
            "stats",
        ].sort()
    );
};

export const checkIfChampionIsValid = (champion: ChampionTypes.Champion) => {
    expect(Object.keys(champion).sort()).toEqual(
        [
            "id",
            "key",
            "name",
            "title",
            "image",
            "skins",
            "lore",
            "blurb",
            "allytips",
            "enemytips",
            "tags",
            "partype",
            "info",
            "stats",
            "spells",
            "passive",
            "recommended",
        ].sort()
    );
};

export const checkIfChampionRotationIsValid = (
    champRotation: ChampionRotationTypes.ChampionRotationAPIResponse
) => {
    expect(Object.keys(champRotation).sort()).toEqual(
        [
            "freeChampionIds",
            "freeChampionIdsForNewPlayers",
            "maxNewPlayerLevel",
        ].sort()
    );
};

export const checkIfChampionMasteryIsValid = (
    champMastery: ChampionMasteryTypes.ChampionMasteryAPIResponse
) => {
    expect(Object.keys(champMastery).sort()).toEqual(
        [
            "championPointsUntilNextLevel",
            "chestGranted",
            "championId",
            "lastPlayTime",
            "championLevel",
            "summonerId",
            "championPoints",
            "championPointsSinceLastLevel",
            "tokensEarned",
        ].sort()
    );
};

export const checkIfValidSummoner = (
    summoner: SummonerTypes.SummonerAPIResponse
) => {
    expect(Object.keys(summoner).sort()).toEqual(
        [
            "id",
            "accountId",
            "puuid",
            "name",
            "profileIconId",
            "revisionDate",
            "summonerLevel",
        ].sort()
    );
};

export function isURL(str) {
    if (str && str.length > 0) {
        const pattern = new RegExp(
            "^(https?:\\/\\/)?" + // protocol
                "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
                "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
                "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
                "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
                "(\\#[-a-z\\d_]*)?$",
            "i"
        );
        return pattern.test(str);
    }
    return false;
}
