import {
    DEFAULT_REGION_NAME,
    DEFAULT_SUMMONER_NAME,
    checkIfProfileIconIsValid,
} from "../../../../utils";
import ProfileIcon from "../../../../../src/dto/ddragon/profileIcon/profileIcon";
import RiotAPI from "../../../../../src";
import Summoner from "../../../../../src/dto/riotapi/summoner/Summoner";

const riotAPIKey = process.env.RIOT_API_KEY_LOL_TEST || "";

describe("RiotAPI", () => {
    let api: RiotAPI = null;
    let summoner: Summoner = null;

    beforeAll(async () => {
        api = new RiotAPI({ riotToken: riotAPIKey });
        summoner = await api.summoner.getByName(
            DEFAULT_SUMMONER_NAME,
            DEFAULT_REGION_NAME
        );
    });

    describe("Summoner", () => {
        test("getProfileIcon", async () => {
            const icon = await summoner.profileIcon.getProfileIcon();
            expect(icon).toBeInstanceOf(ProfileIcon);
            checkIfProfileIconIsValid(icon.data);
            expect(icon.data.id).toBe(summoner.data.profileIconId);
        });
    });
});
