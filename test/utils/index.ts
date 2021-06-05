import { APIStatusTypes } from "../../src/types/dto/riotapi/apistatus/APIStatusDTO";
import { ChampionMasteryTypes } from "../../src/types/dto/riotapi/championmastery/ChampionMasteryDTO";
import { ChampionRotationTypes } from "../../src/types/dto/riotapi/championrotation/ChampionRotationDTO";
import { ChampionsTypes } from "../../src/types/dto/ddragon/champions";
import { MatchTypes } from "../../src/types/dto/riotapi/match/MatchDTO";
import { SummonerTypes } from "../../src/types/dto/riotapi/summoner/summonerDTO";

export const DEFAULT_SUMMONER_NAME = "Priciiix";
export const DEFAULT_REGION_NAME = "euw1";
export const DEFAULT_PLATFORM_NAME = "europe";

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

export const checkIfChampionIsValid = (champion: ChampionsTypes.Champion) => {
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
