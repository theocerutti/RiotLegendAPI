import { RegionName } from "../../types/endpoints";
import RiotAPI from "../../api/RiotAPI";

class RiotBaseModel {
    protected readonly api: RiotAPI;

    protected readonly associatedRegion: RegionName;

    private readonly apiData: any;

    constructor(api: RiotAPI, region: RegionName, data: any) {
        this.apiData = data;
        this.associatedRegion = region;
        this.api = api;
    }

    public get data() {
        return this.apiData;
    }
}

export default RiotBaseModel;
