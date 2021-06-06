import { ClusterName, RegionName } from "../../types/endpoints";
import RiotAPI from "../../api/RiotAPI";
import { getClusterFromRegion } from "../../api/utils/endpoint";

class RiotBaseModel<T> {
    protected readonly api: RiotAPI;

    private readonly associatedRegion?: RegionName;

    private readonly associatedCluster?: ClusterName;

    private readonly apiData: T;

    constructor(
        api: RiotAPI,
        platform: { region?: RegionName; cluster?: ClusterName },
        data: T
    ) {
        this.apiData = data;
        this.api = api;
        this.associatedCluster = platform.cluster;
        this.associatedRegion = platform.region;
        if (this.associatedRegion && !this.associatedCluster)
            this.associatedCluster = getClusterFromRegion(
                this.associatedRegion
            );
    }

    public get region(): RegionName {
        return this.associatedRegion;
    }

    public get data(): T {
        return this.apiData;
    }
}

export default RiotBaseModel;
