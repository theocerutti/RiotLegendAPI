import { RestEndpoint } from "./api";

export type DTOEndpoint<DTO> = { [key in keyof DTO]: RestEndpoint };
