import DDragonAPI, {
    DEFAULT_LOCALE_FALLBACK,
    DEFAULT_REALM_FALLBACK,
} from "../../src/api/DDragonAPI";

describe("DDragonAPI", () => {
    test("should constructor properly", () => {
        const api = new DDragonAPI();
        expect(api).toBeInstanceOf(DDragonAPI);
    });

    test("should fallback region properly if config fallback not set", () => {
        const api = new DDragonAPI(null);
        expect(api.regionFallback.realm).toBe(DEFAULT_REALM_FALLBACK);
        expect(api.regionFallback.locale).toBe(DEFAULT_LOCALE_FALLBACK);
    });

    test("should fallback region properly if config fallback set", () => {
        const api = new DDragonAPI({
            region: {
                realm: "na",
                locale: "en_US",
            },
        });
        expect(api.regionFallback.realm).toBe("na");
        expect(api.regionFallback.locale).toBe("en_US");
    });
});
