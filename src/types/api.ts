import { Endpoint } from "./endpoints";
import { Method } from "../api";

export type RiotToken = string;
export type AccessToken = string;
export type RequestOptions = {
    body?: object;
    headers?: { [key: string]: string };
};
export type RestEndpoint = { method: Method; endpoint: Endpoint };
