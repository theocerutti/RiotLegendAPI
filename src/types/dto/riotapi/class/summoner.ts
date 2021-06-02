import { ChampionMasteriesTypes } from "../championmasteries";
import { RegionName } from "../../../endpoints";
import RiotAPI from "../../../../api/RiotAPI";
import { SummonerTypes } from "../summoner";
import { getChampionMasteriesDTO } from "../../../../dto/riotapi/championmasteries";

class Summoner {
    private readonly summonerData: SummonerTypes.Summoner;

    private readonly championMasteriesDTO: ChampionMasteriesTypes.DTO;

    private readonly associatedRegion: RegionName;

    constructor(
        summoner: SummonerTypes.Summoner,
        api: RiotAPI,
        region: RegionName
    ) {
        this.summonerData = summoner;
        this.championMasteriesDTO = getChampionMasteriesDTO(api);
        this.associatedRegion = region;
    }

    get championMasteries(): ChampionMasteriesTypes.DTO {
        return {
            getByAccountID: async () =>
                this.championMasteriesDTO.getByAccountID(
                    this.summonerData.id,
                    this.associatedRegion
                ),
            // TODO: REALLY UGLY
            getByChampion: async (championID) =>
                this.championMasteriesDTO.getByChampion(
                    this.summonerData.id,
                    championID,
                    this.associatedRegion
                ),
            getTotalScore: async () =>
                this.championMasteriesDTO.getTotalScore(
                    this.summonerData.id,
                    this.associatedRegion
                ),
        };
    }

    get data(): SummonerTypes.Summoner {
        return this.summonerData;
    }
}

export default Summoner;
