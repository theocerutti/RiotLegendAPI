import { PlatformName } from "../../types/endpoints";
import { RIOT_API_URL } from "../../constants/constants";

export const getRiotAPIBaseURL = (platform: PlatformName) =>
    `https://${platform}.${RIOT_API_URL}`;
