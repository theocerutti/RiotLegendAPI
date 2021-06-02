import { isURL } from "../utils";

describe("Utils Functions", () => {
    test("isUrl => good url", () => {
        const goodUrl1 = "https://www.google.com/";
        const goodUrl2 = "https://developer.riotgames.com/docs/lol#_overview";
        const goodUrl3 =
            "https://www.google.com/search?q=google&oq=google&aqs=chrome..69i57j69i59j35i39j0i131i433j0i433j69i60l2j69i65.1775j0j4&sourceid=chrome&ie=UTF-8";

        expect(isURL(goodUrl1)).toBeTruthy();
        expect(isURL(goodUrl2)).toBeTruthy();
        expect(isURL(goodUrl3)).toBeTruthy();
    });

    test("isUrl => bad url", () => {
        const badUrl1 = "htetps://www.google.com/";
        const badUrl2 = "https:/@/developer.riotgames.com/docs/lol#_overview";
        const badUrl3 = "";

        expect(isURL(badUrl1)).toBeFalsy();
        expect(isURL(badUrl2)).toBeFalsy();
        expect(isURL(badUrl3)).toBeFalsy();
    });
});
