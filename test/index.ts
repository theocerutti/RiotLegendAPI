import RiotAPI from "../src";
import { RiotAPIConfig } from "../src/types/riotapi";

const main = async () => {
    const config: RiotAPIConfig = {
        routingName: "euw1",
        riotToken: "RGAPI-7e648117-7fe2-439b-9369-56497d23a2b2",
    };
    const api = await new RiotAPI(config).setAccount({ username: "Priciiix" });
    console.log(api.me);
    const res = await api.summoner.byName("BarkanePrw");
    console.log(res);
    const res2 = await api.summoner.byName("BarkanePrw");
    console.log(res2);
};

main();
