export type GameVersion = string;
export type GameVersions = Array<GameVersion>;

export type Realm =
    | "na"
    | "euw"
    | "EUNE"
    | "br"
    | "jp"
    | "kr"
    | "oce"
    | "lan"
    | "las"
    | "ru"
    | "tr";

export type Locale =
    | "cs_CZ" // Czech (Czech Republic)
    | "el_GR" // Greek (Greece)
    | "pl_PL" // Polish (Poland)
    | "ro_RO" // Romanian (Romania)
    | "hu_HU" // Hungarian (Hungary)
    | "en_GB" // English (United Kingdom)
    | "de_DE" // German (Germany)
    | "es_ES" // Spanish (Spain)
    | "it_IT" // Italian (Italy)
    | "fr_FR" // French (France)
    | "ja_JP" // Japanese (Japan)
    | "ko_KR" // Korean (Korea)
    | "es_MX" // Spanish (Mexico)
    | "es_AR" // Spanish (Argentina)
    | "pt_BR" // Portuguese (Brazil)
    | "en_US" // English (United States)
    | "en_AU" // English (Australia)
    | "ru_RU" // Russian (Russia)
    | "tr_TR" // Turkish (Turkey)
    | "ms_MY" // Malay (Malaysia)
    | "en_PH" // English (Republic of the Philippines)
    | "en_SG" // English (Singapore)
    | "th_TH" // Thai (Thailand)
    | "vn_VN" // Vietnamese (Viet Nam)
    | "id_ID" // Indonesian (Indonesia)
    | "zh_MY" // Chinese (Malaysia)
    | "zh_CN" // Chinese (China)
    | "zh_TW"; // Chinese (Taiwan)
