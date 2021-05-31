import {
    DEFAULT_CLUSTER_FALLBACK,
    DEFAULT_REGION_FALLBACK,
} from "../../src/api/RiotAPI";
import { InvalidRiotApiConfig, NoCredentialsError } from "../../src/errors";
import RiotAPI from "../../src";

describe("RiotAPI", () => {
    test("should THROW if bad config", () => {
        expect(() => new RiotAPI(null)).toThrowError(
            new InvalidRiotApiConfig()
        );
        expect(() => new RiotAPI({ riotToken: undefined })).toThrowError(
            new NoCredentialsError()
        );
    });

    test("should fallback region properly if config fallback not set", () => {
        const api = new RiotAPI({ riotToken: "key" });
        expect(api.regionFallback.cluster).toBe(DEFAULT_CLUSTER_FALLBACK);
        expect(api.regionFallback.region).toBe(DEFAULT_REGION_FALLBACK);
    });

    test("should fallback region properly if config fallback set", () => {
        const api = new RiotAPI({
            riotToken: "key",
            platform: {
                region: "na1",
                cluster: "americas",
            },
        });
        expect(api.regionFallback.region).toBe("na1");
        expect(api.regionFallback.cluster).toBe("americas");
    });
});
