import DDragonAPI from "../../api/DDragonAPI";

class DTO {
    protected readonly api: DDragonAPI;

    constructor(api: DDragonAPI) {
        this.api = api;
    }
}

export default DTO;
