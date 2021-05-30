import { RIOT_API_URL } from "../../constants/constants";
import { RoutingName } from "../../types/endpoints";

export const getRiotAPIBaseURL = (routing: RoutingName) =>
    `https://${routing}.${RIOT_API_URL}`;
