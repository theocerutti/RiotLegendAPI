import ChampionRotation from "../../../../../src/dto/riotapi/championrotation/ChampionRotation";
import ChampionShard from "../../../../../src/dto/ddragon/champion/championShard";
import RiotAPI from "../../../../../src";
import { checkIfChampionShardIsValid } from "../../../../utils";

const riotAPIKey = process.env.RIOT_API_KEY_LOL_TEST || "";

describe("RiotAPI", () => {
    describe("ChampionRotation", () => {
        let api: RiotAPI = null;
        let rotations: ChampionRotation = null;

        beforeAll(async () => {
            api = new RiotAPI({ riotToken: riotAPIKey });
            rotations = await api.championRotation.getChampionRotations();
        });

        test("getFreeRotations", async () => {
            const champRots =
                await rotations.champions.getFreeRotationsFreePlayer();
            expect(champRots).toBeInstanceOf(Array);
            const firstChampShard: ChampionShard = champRots[0];
            checkIfChampionShardIsValid(firstChampShard.data);
        });
    });
});
