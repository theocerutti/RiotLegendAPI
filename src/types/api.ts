import { Endpoint } from "./endpoints";
import { Method } from "../api";

export type RiotToken = string;
export type RestEndpoint = { method: Method; endpoint: Endpoint };
