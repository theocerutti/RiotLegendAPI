import DDragonAPI from "../../api/DDragonAPI";
import { Locale } from "../../types/ddragon";
import { VersionTypes } from "../../types/dto/ddragon/versions";

class DDragonBaseModel<T> {
    protected readonly api: DDragonAPI;

    private readonly associatedVersion: VersionTypes.GameVersion;

    private readonly associatedLocale: Locale;

    private readonly apiData: T;

    constructor(
        api: DDragonAPI,
        locale: Locale,
        version: VersionTypes.GameVersion,
        data: T
    ) {
        this.api = api;
        this.associatedLocale = locale;
        this.associatedVersion = version;
        this.apiData = data;
    }

    public get version(): VersionTypes.GameVersion {
        return this.associatedVersion;
    }

    public get locale(): Locale {
        return this.associatedLocale;
    }

    public get data(): T {
        return this.apiData;
    }
}

export default DDragonBaseModel;
