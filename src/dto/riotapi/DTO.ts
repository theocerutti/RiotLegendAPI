import RiotAPI from "../../api/RiotAPI";

class DTO {
    protected readonly api: RiotAPI;

    constructor(api: RiotAPI) {
        this.api = api;
    }
}

export default DTO;
