import Champion from "../../../../src/dto/ddragon/class/champion";
import ChampionRotation from "../../../../src/dto/riotapi/championrotation/ChampionRotation";
import RiotAPI from "../../../../src";
import { checkIfChampionRotationIsValid } from "../../../utils";

const riotAPIKey = process.env.RIOT_API_KEY_LOL_TEST || "";

describe("RiotAPI", () => {
    describe("ChampionRotation", () => {
        let api: RiotAPI = null;

        beforeAll(async () => {
            api = new RiotAPI({ riotToken: riotAPIKey });
        });

        test("getFreeRotations", async () => {
            const rotations = await api.championRotation.getChampionRotations();
            expect(rotations).toBeInstanceOf(ChampionRotation);
            checkIfChampionRotationIsValid(rotations.data);
            const allChamps = await rotations.champions.getFreeRotations();
            expect(allChamps).toBeInstanceOf(Array);
            const firstChampRotation = allChamps[0];
            // checkIfChampionIsValid(firstChampRotation.data); TODO: check it
            expect(firstChampRotation).toBeInstanceOf(Champion);
        });

        test("getFreeRotationsFreePlayer", async () => {
            const rotations = await api.championRotation.getChampionRotations();
            expect(rotations).toBeInstanceOf(ChampionRotation);
            checkIfChampionRotationIsValid(rotations.data);
            const allChamps =
                await rotations.champions.getFreeRotationsFreePlayer();
            expect(allChamps).toBeInstanceOf(Array);
            const firstChampRotation = allChamps[0];
            // checkIfChampionIsValid(firstChampRotation.data); TODO: check it
            expect(firstChampRotation).toBeInstanceOf(Champion);
        });
    });
});
