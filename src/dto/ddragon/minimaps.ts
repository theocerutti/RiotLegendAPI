import DDragonAPI from "../../api/DDragonAPI";
import { MinimapTypes } from "../../types/dto/ddragon/minimaps";
import Minimaps from "./class/minimaps";

export const getMinimapsDTO = (api: DDragonAPI): MinimapTypes.DTO => ({
    all: async (): Promise<Minimaps> => {
        const latestVersion = await api.versions.latest();
        const res: MinimapTypes.APIResponse = await api.ddragonRequest(
            MinimapTypes.RestEndpoint.all,
            {
                version: await api.versions.latest(),
            }
        );
        return new Minimaps(res, latestVersion);
    },
});
