import {
    checkIfChampionRotationIsValid,
    checkIfChampionShardIsValid,
} from "../../../utils";
import ChampionRotation from "../../../../src/dto/riotapi/championrotation/ChampionRotation";
import ChampionShard from "../../../../src/dto/ddragon/champion/championShard";
import RiotAPI from "../../../../src";

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
            expect(firstChampRotation).toBeInstanceOf(ChampionShard);
            checkIfChampionShardIsValid(firstChampRotation.data);
        });

        test("getFreeRotationsFreePlayer", async () => {
            const rotations = await api.championRotation.getChampionRotations();
            expect(rotations).toBeInstanceOf(ChampionRotation);
            checkIfChampionRotationIsValid(rotations.data);
            const allChamps =
                await rotations.champions.getFreeRotationsFreePlayer();
            expect(allChamps).toBeInstanceOf(Array);
            const firstChampRotation = allChamps[0];
            checkIfChampionShardIsValid(firstChampRotation.data);
            expect(firstChampRotation).toBeInstanceOf(ChampionShard);
        });
    });
});
