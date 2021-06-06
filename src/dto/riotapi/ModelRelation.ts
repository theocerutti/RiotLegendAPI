import RiotAPI from "../../api/RiotAPI";

class ModelRelation<T> {
    private readonly riotApi: RiotAPI;

    private readonly modelInstance: T;

    constructor(api: RiotAPI, model: T) {
        this.riotApi = api;
        this.modelInstance = model;
    }

    get api(): RiotAPI {
        return this.riotApi;
    }

    get model(): T {
        return this.modelInstance;
    }
}

export default ModelRelation;
