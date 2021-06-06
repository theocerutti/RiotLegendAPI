import { ClusterName, PlatformName, RegionName } from "../../types/endpoints";
import { RIOT_API_URL, clusterRegionMapper } from "../../constants/constants";

export const getRiotAPIBaseURL = (platform: PlatformName) =>
    `https://${platform}.${RIOT_API_URL}`;

export const getClusterFromRegion = (regionToFind: RegionName): ClusterName => {
    const clusters = Object.keys(clusterRegionMapper) as Array<ClusterName>;
    const regions = clusters.filter((cluster: string) =>
        clusterRegionMapper[cluster].find((region) => region === regionToFind)
    );
    if (regions.length > 1)
        throw new Error("There is duplicate region in clusters!");
    return regions[0];
};
