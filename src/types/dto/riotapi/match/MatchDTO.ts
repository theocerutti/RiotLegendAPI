import { ChampionsTypes } from "../../ddragon/champions";
import { DTOEndpoint } from "../../dto";
import MatchClass from "../../../../dto/riotapi/match/Match";
import MatchTimeLineClass from "../../../../dto/riotapi/match/MatchTimeLine";
import { ClusterName } from "../../../endpoints";
import { SummonerTypes } from "../summoner/summonerDTO";
import { UtilsTypes } from "../../../utils";

export namespace MatchTypes {
    export type MatchID = string;
    export type GameID = number;
    export type GameMode = string;
    export type GameName = string;
    export type GameType = string;
    export type GameVersion = string;
    export type MapID = string;
    export type ParticipantID = number;

    export type Match = {
        metadata: MatchMetadata;
        info: MatchInfo;
    };

    export type MatchMetadata = {
        dataVersion: string;
        matchId: MatchID;
        participants: Array<SummonerTypes.PUUID>;
    };

    export type MatchInfo = {
        gameCreation: UtilsTypes.UnixTimestamp;
        gameDuration: UtilsTypes.UnixTimestamp;
        gameId: GameID;
        gameMode: GameMode;
        gameName: GameName;
        gameStartTimestamp: UtilsTypes.UnixTimestamp;
        gameType: GameType;
        gameVersion: GameVersion;
        mapId: MapID;
        participants: Array<MatchParticipants>;
    };

    export type MatchParticipants = {
        assists: number;
        baronKills: number;
        bountyLevel: number;
        champExperience: number;
        champLevel: number;
        championId: ChampionsTypes.ChampionID;
        championName: ChampionsTypes.Name;
        championTransform: number;
        consumablesPurchased: number;
        damageDealtToBuildings: number;
        damageDealtToObjectives: number;
        damageDealtToTurrets: number;
        damageSelfMitigated: number;
        deaths: number;
        detectorWardsPlaced: number;
        doubleKills: number;
        dragonKills: number;
        firstBloodAssist: boolean;
        firstBloodKill: boolean;
        firstTowerAssist: boolean;
        firstTowerKill: boolean;
        gameEndedInEarlySurrender: boolean;
        gameEndedInSurrender: boolean;
        goldEarned: number;
        goldSpent: number;
        individualPosition: string;
        inhibitorKills: number;
        inhibitorsLost: number;
        item0: number;
        item1: number;
        item2: number;
        item3: number;
        item4: number;
        item5: number;
        item6: number;
        itemsPurchased: number;
        killingSprees: number;
        kills: number;
        lane: string;
        largestCriticalStrike: number;
        largestKillingSpree: number;
        largestMultiKill: number;
        longestTimeSpentLiving: number;
        magicDamageDealt: number;
        magicDamageDealtToChampions: number;
        magicDamageTaken: number;
        neutralMinionsKilled: number;
        nexusKills: number;
        nexusLost: number;
        objectivesStolen: number;
        objectivesStolenAssists: number;
        participantId: ParticipantID;
        pentaKills: number;
        perks: Perks;
        physicalDamageDealt: number;
        physicalDamageDealtToChampions: number;
        physicalDamageTaken: number;
        profileIcon: number;
        puuid: SummonerTypes.PUUID;
        quadraKills: number;
        riotIdName: string;
        riotIdTagline: string;
        role: string;
        sightWardsBoughtInGame: number;
        spell1Casts: number;
        spell2Casts: number;
        spell3Casts: number;
        spell4Casts: number;
        summoner1Casts: number;
        summoner1Id: SummonerTypes.ID;
        summoner2Casts: number;
        summoner2Id: SummonerTypes.ID;
        summonerId: SummonerTypes.ID;
        summonerLevel: SummonerTypes.SummonerLevel;
        summonerName: SummonerTypes.Name;
        teamEarlySurrendered: boolean;
        teamId: TeamID;
        teamPosition: string;
        timeCCingOthers: number;
        timePlayed: number;
        totalDamageDealt: number;
        totalDamageDealtToChampions: number;
        totalDamageShieldedOnTeammates: number;
        totalDamageTaken: number;
        totalHeal: number;
        totalHealsOnTeammates: number;
        totalMinionsKilled: number;
        totalTimeCCDealt: number;
        totalTimeSpentDead: number;
        totalUnitsHealed: number;
        tripleKills: number;
        trueDamageDealt: number;
        trueDamageDealtToChampions: number;
        trueDamageTaken: number;
        turretKills: number;
        turretsLost: number;
        unrealKills: number;
        visionScore: number;
        visionWardsBoughtInGame: number;
        wardsKilled: number;
        wardsPlaced: number;
        win: boolean;
    };

    export type Perks = {
        statPerks: {
            defense: number;
            flex: number;
            offense: number;
        };
        styles: Array<Style>;
    };

    export type Style = {
        description: string;
        selections: Array<Selection>;
        style: number;
    };

    export type Selection = {
        perk: number;
        var1: number;
        var2: number;
        var3: number;
    };

    export type MatchTimeLine = {
        metadata: MatchMetadata;
        info: MatchTimeLineInfo;
    };

    export type MatchTimeLineInfo = {
        frameInterval: UtilsTypes.UnixTimestamp;
        frames: Array<MatchTimeLineFrame>;
        gameId: GameID;
        participants: Array<{
            participantId: ParticipantID;
            puuid: SummonerTypes.PUUID;
        }>;
    };

    export type MatchTimeLineFrame = {
        events: Array<MatchEvents.AllEvents>;
        participantFrames: { [key: string]: ParticipantFrame };
        timestamp: UtilsTypes.UnixTimestamp;
    };

    export type WardType =
        | "UNDEFINED"
        | "YELLOW_TRINKET"
        | "CONTROL_WARD"
        | "SIGHT_WARD"
        | "BLUE_TRINKET";
    export type ItemEventType =
        | "ITEM_SOLD"
        | "ITEM_DESTROYED"
        | "ITEM_PURCHASED"
        | "ITEM_UNDO";
    export type LaneType = "BOT_LANE" | "TOP_LANE" | "MID_LANE";
    export type BuildingType = "INHIBITOR_BUILDING";
    export type DamageDealtByType = "OTHER" | "MINION" | "TOWER" | "MONSTER";
    export type KillType = "KILL_FIRST_BLOOD" | "KILL_MULTI" | "KILL_ACE";
    export type EliteMonsterSubType =
        | "EARTH_DRAGON"
        | "AIR_DRAGON"
        | "FIRE_DRAGON"
        | "WATER_DRAGON";
    export type EliteMonsterType = "DRAGON" | "RIFTHERALD" | "BARON_NASHOR";
    export type TeamID = number;
    export type Position = {
        x: number;
        y: number;
    };

    export namespace MatchEvents {
        export type PauseEndEvent = {
            realTimestamp: UtilsTypes.UnixTimestamp;
            timestamp: UtilsTypes.UnixTimestamp;
            type: "PAUSE_END";
        };

        export type LevelUpEvent = {
            level: number;
            participantId: ParticipantID;
            timestamp: UtilsTypes.UnixTimestamp;
            type: "LEVEL_UP";
        };

        export type SkillLevelUpEvent = {
            levelUpType: "NORMAL";
            participantId: ParticipantID;
            skillSlot: number;
            timestamp: UtilsTypes.UnixTimestamp;
            type: "SKILL_LEVEL_UP";
        };

        export type WardPlacedEvent = {
            creatorId: ParticipantID;
            timestamp: UtilsTypes.UnixTimestamp;
            type: "WARD_PLACED";
            wardType: WardType;
        };

        export type ItemEvent = {
            itemId: number;
            afterId: number;
            beforeId: number;
            goldGain: number;
            participantId: ParticipantID;
            timestamp: UtilsTypes.UnixTimestamp;
            type: ItemEventType;
        };

        export type WardKillEvent = {
            killerId: ParticipantID;
            timestamp: UtilsTypes.UnixTimestamp;
            type: "WARD_KILL";
            wardType: WardType;
        };

        export type ChampionKillEvent = {
            assistingParticipantIds: Array<ParticipantID>;
            bounty: number;
            killStreakLength: number;
            killerId: ParticipantID;
            position: Position;
            timestamp: UtilsTypes.UnixTimestamp;
            type: "CHAMPION_KILL";
            victimDamageDealt?: Array<{
                basic: boolean;
                magicDamage: number;
                name: ChampionsTypes.Name;
                participantId: ParticipantID;
                physicalDamage: number;
                spellName: string;
                spellSlot: number;
                trueDamage: number;
                type: DamageDealtByType;
            }>;
            victimDamageReceived?: Array<{
                basic: boolean;
                magicDamage: number;
                name: ChampionsTypes.Name;
                participantId: ParticipantID;
                physicalDamage: number;
                spellName: string;
                spellSlot: number;
                trueDamage: number;
                type: DamageDealtByType;
            }>;
            victimId: ParticipantID;
        };

        export type ChampionSpecialKillEvent = {
            killType: KillType;
            killerId: ParticipantID;
            multiKillLength: number;
            position: Position;
            timestamp: UtilsTypes.UnixTimestamp;
            type: "CHAMPION_SPECIAL_KILL";
        };

        export type BuildingKillEvent = {
            assistingParticipantIds: Array<ParticipantID>;
            buildingType: BuildingType;
            killerId: ParticipantID;
            laneType: LaneType;
            position: Position;
            teamId: TeamID;
            timestamp: UtilsTypes.UnixTimestamp;
            type: "BUILDING_KILL";
        };

        export type GameEndEvent = {
            gameId: GameID;
            realTimestamp: UtilsTypes.UnixTimestamp;
            timestamp: UtilsTypes.UnixTimestamp;
            type: "GAME_END";
            winningTeam: TeamID;
        };

        export type TurretPlateDestroyedEvent = {
            killerId: ParticipantID;
            laneType: LaneType;
            position: Position;
            teamId: TeamID;
            timestamp: UtilsTypes.UnixTimestamp;
            type: "TURRET_PLATE_DESTROYED";
        };

        export type DragonSoulGivenEvent = {
            name: string;
            teamId: TeamID;
            timestamp: UtilsTypes.UnixTimestamp;
            type: "DRAGON_SOUL_GIVEN";
        };

        export type EliteMonsterKilledEvent = {
            assistingParticipantIds?: Array<ParticipantID>;
            killerId: ParticipantID;
            killerTeamId: TeamID;
            monsterSubType?: EliteMonsterSubType;
            monsterType: EliteMonsterType;
            position: Position;
            timestamp: UtilsTypes.UnixTimestamp;
            type: "ELITE_MONSTER_KILL";
        };

        export type AllEvents =
            | PauseEndEvent
            | LevelUpEvent
            | SkillLevelUpEvent
            | ItemEvent
            | WardPlacedEvent
            | WardKillEvent
            | ChampionKillEvent
            | ChampionSpecialKillEvent
            | BuildingKillEvent
            | GameEndEvent
            | TurretPlateDestroyedEvent
            | DragonSoulGivenEvent
            | EliteMonsterKilledEvent;
    }

    export type ParticipantFrame = {
        championStats: {
            abilityHaste: number;
            abilityPower: number;
            armor: number;
            armorPen: number;
            armorPenPercent: number;
            attackDamage: number;
            attackSpeed: number;
            bonusArmorPenPercent: number;
            bonusMagicPenPercent: number;
            ccReduction: number;
            cooldownReduction: number;
            health: number;
            healthMax: number;
            healthRegen: number;
            lifesteal: number;
            magicPen: number;
            magicPenPercent: number;
            magicResist: number;
            movementSpeed: number;
            omnivamp: number;
            physicalVamp: number;
            power: number;
            powerMax: number;
            powerRegen: number;
            spellVamp: number;
        };
        currentGold: number;
        damageStats: {
            magicDamageDone: number;
            magicDamageDoneToChampions: number;
            magicDamageTaken: number;
            physicalDamageDone: number;
            physicalDamageDoneToChampions: number;
            physicalDamageTaken: number;
            totalDamageDone: number;
            totalDamageDoneToChampions: number;
            totalDamageTaken: number;
            trueDamageDone: number;
            trueDamageDoneToChampions: number;
            trueDamageTaken: number;
        };
        goldPerSecond: number;
        jungleMinionsKilled: number;
        level: number;
        minionsKilled: number;
        participantId: number;
        position: Position;
        timeEnemySpentControlled: number;
        totalGold: number;
        xp: number;
    };

    export const RestEndpoint: DTOEndpoint<DTO> = {
        getMatchListIdsByPUUID: {
            method: "GET",
            repertory: "/lol/match/v5/matches/by-puuid/:puuid/ids",
        },
        getMatchListByPUUID: {
            method: "GET",
            repertory: "/lol/match/v5/matches/by-puuid/:puuid/ids",
        },
        getMatchByID: {
            method: "GET",
            repertory: "/lol/match/v5/matches/:matchId",
        },
        getMatchTimeLineByID: {
            method: "GET",
            repertory: "/lol/match/v5/matches/:matchId/timeline",
        },
    };

    export interface DTO {
        getMatchListIdsByPUUID(
            puuid: SummonerTypes.PUUID,
            cluster?: ClusterName
        ): Promise<Array<MatchID>>;
        getMatchListByPUUID(
            puuid: SummonerTypes.PUUID,
            cluster?: ClusterName
        ): Promise<Array<MatchClass>>;
        getMatchByID(
            match: MatchID,
            cluster?: ClusterName
        ): Promise<MatchClass>;
        getMatchTimeLineByID(
            match: MatchID,
            cluster?: ClusterName
        ): Promise<MatchTimeLineClass>;
    }
}
