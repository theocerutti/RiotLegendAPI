export const checkIfChampionMasteryIsValid = (champMastery) => {
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

export const checkIfValidSummoner = (summ) => {
    const summData = summ.data;
    expect(summData.name).toEqual("Priciiix");
    expect(Object.keys(summData).sort()).toEqual(
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
