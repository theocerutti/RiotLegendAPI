import RiotAPI from "../../api/RiotAPI";

class RiotBaseModel {
    protected readonly api: RiotAPI;

    protected readonly associatedRegion: string;

    private readonly apiData: any;

    constructor(api: RiotAPI, region: string, data: any) {
        this.apiData = data;
        this.associatedRegion = region;
        this.api = api;
    }

    public get data() {
        return this.apiData;
    }
}

export default RiotBaseModel;
