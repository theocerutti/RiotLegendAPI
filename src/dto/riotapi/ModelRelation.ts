import RiotAPI from "../../api/RiotAPI";

class ModelRelation {
    private readonly riotApi: RiotAPI;

    private readonly modelInstance: any;

    constructor(api: RiotAPI, model: any) {
        this.riotApi = api;
        this.modelInstance = model;
    }

    get api(): RiotAPI {
        return this.riotApi;
    }

    get model(): any {
        return this.modelInstance;
    }
}

export default ModelRelation;
