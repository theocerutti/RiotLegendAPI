import { DTOEndpoint } from "../../dto";
import { RegionName } from "../../../endpoints";

export namespace APIStatusTypes {
    export type PlatformDataDTO = {
        id: string;
        name: string;
        locales: Array<string>;
        maintenances: Array<StatusDTO>;
        incidents: Array<StatusDTO>;
    };

    export type StatusDTO = {
        id: number;
        maintenance_status: string;
        incident_severity: string;
        titles: Array<ContentDTO>;
        updates: Array<UpdateDTO>;
        created_at: string;
        archive_at: string;
        updated_at: string;
        platforms: Array<string>;
    };

    export type ContentDTO = {
        locale: string;
        content: string;
    };

    export type UpdateDTO = {
        id: number;
        author: string;
        publish: boolean;
        publish_locations: Array<"riotclient" | "riotstatus" | "game">;
        translations: Array<ContentDTO>;
        created_at: string;
        updated_at: string;
    };

    export const RestEndpoint: DTOEndpoint<DTO> = {
        getStatus: {
            method: "GET",
            repertory: "/lol/status/v4/platform-data",
        },
    };

    export interface DTO {
        getStatus(region?: RegionName): Promise<PlatformDataDTO>;
    }
}
