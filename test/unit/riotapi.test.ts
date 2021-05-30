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
});
