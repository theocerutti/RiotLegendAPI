import { Endpoint } from "./endpoints";

export type AccessToken = string;

export type RequestOptions = {
    body?: object;
    headers?: { [key: string]: string };
};

export type RestMethod =
    | "get"
    | "GET"
    | "delete"
    | "DELETE"
    | "head"
    | "HEAD"
    | "options"
    | "OPTIONS"
    | "post"
    | "POST"
    | "put"
    | "PUT"
    | "patch"
    | "PATCH"
    | "purge"
    | "PURGE"
    | "link"
    | "LINK"
    | "unlink"
    | "UNLINK";

export type RestEndpoint = {
    method: RestMethod;
    repertory: Endpoint;
    baseUrl?: Endpoint;
};
