export type Endpoint = string;

export type ClusterName = "americas" | "asia" | "europe";

export type RegionName =
    | "euw1"
    | "eun1"
    | "na1"
    | "la1"
    | "la2"
    | "kr"
    | "jp1"
    | "br1"
    | "oc1"
    | "ru"
    | "tr1"
    | "sea"
    | "ap"
    | "br"
    | "eu"
    | "na"
    | "latam";

export type PlatformName = ClusterName | RegionName;
