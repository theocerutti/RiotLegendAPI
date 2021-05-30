export type Endpoint = string;

export type PlatformName = "americas" | "asia" | "europe";

export type RegionName =
    | "br1"
    | "eun1"
    | "euw1"
    | "jp1"
    | "kr"
    | "la1"
    | "la2"
    | "na1"
    | "oc1"
    | "tr1"
    | "ru";

export type RoutingName = RegionName | PlatformName;
