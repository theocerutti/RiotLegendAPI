# RiotLegendAPI

:warning: It is still in development... :warning:

It's an easy to use api for riot games.  
This API wrapper is fully typed and provides a lots of helpers classes to get riot data.

API implements multiple functionalities:
* API limiter with Bottleneck library
* Almost* all available endpoints
* Relations between API Riot Object
* Cache with IOredis
* DDragon wrapper API (relations works also between DDragon and RiotAPI) (can work alone)
* Fully tested with jest

## Example

```ts
import RiotAPI from "./api/RiotAPI";
import Champion from "./dto/ddragon/champion/champion";
import Summoner from "./dto/riotapi/summoner/Summoner";

async function example() {
  const api: RiotAPI = new RiotAPI({
    riotToken: "MY_RIOT_TOKEN",
    platform: { region: "euw1" },
  });
  
  const me: Summoner = await api.summoner.getByName("Priciiix");
  console.log(me.data.puuid);
  const myChampionMasteriesScore = me.championMastery.getTotalScore(); // relation

  const zyra: Champion = await api.dDragon.champions.getByChampionName("Zyra");
  console.log(zyra.getSplashAssetUrl());
  console.log(zyra.data.stats);
}
```

## Relations

This library provides Relational Objects.  
It means that if you fetch summoner data you will get a Summoner instance
which has multiple relations between others classes.  

Example:

```ts
  const api: RiotAPI = new RiotAPI({
    riotToken: "MY_RIOT_TOKEN",
    platform: { region: "euw1" },
  });

  const rotation: ChampionRotation = await api.championRotation.getChampionRotations();
  
  const champions: Array<ChampionShard> = rotations.champions.getFreeRotationsFreePlayer(); // get Champion class rotations for free players only
  const firstChamp: ChampionShard = champions[0];
  firstChamp.data.name; // Darius for example
```

## Tests

Before running test you MUST create a `.env` file with your RIOT api key.  
Copy/Paste `.env.example` and put your api key.

```ts
// .env
RIOT_API_KEY_LOL_TEST=my_api_key_lol
```

And then you can run test (e2e or unit tests)

```
yarn test
yarn test:e2e
yarn test:unit
```

## Build Project

Build the project using:

```
yarn build
```

## Supported Endpoints

:heavy_minus_sign: : maybe it will never be implemented    
:x: : not implemented yet (wait for it)   
:construction: : means the endpoint is ready for basic data but may missing relations between other objects or missing helpers   
:heavy_check_mark: : helpers, relations are fully implemented  

### Riot API (League of Legends, TFT, Legend of Runaterra, Valorant)

:x: ACCOUNT-V1 (just use SUMMONER-V4)  
:construction: CHAMPION-MASTERY-v4
:construction: CHAMPION-V3  
:x: CLASH-V1  
:heavy_minus_sign: LEAGUE-EXP-V4  
:x: LEAGUE-V4  
:heavy_minus_sign: LOL-STATUS-V3  
:construction: LOL-STATUS-V4  
:heavy_minus_sign: LOR-DECK-V1  
:heavy_minus_sign: LOR-INVENTORY-V1  
:heavy_minus_sign: LOR-MATCH-V1  
:heavy_minus_sign: LOR-RANKED-V1  
:heavy_minus_sign: LOR-STATUS-V1  
:heavy_minus_sign: MATCH-V4  
:construction: MATCH-V5  
:x: SPECTATOR-V4  
:construction: SUMMONER-V4  
:x: TFT-LEAGUE-V1  
:x: TFT-MATCH-V1  
:x: TFT-SUMMONER-V1  
:x: THIRD-PARTY-CODE-V4  
:x: TOURNAMENT-STUB-V4  
:x: TOURNAMENT-V4  
:heavy_minus_sign: VAL-CONTENT-V4  
:heavy_minus_sign: VAL-MATCH-V1  
:heavy_minus_sign: VAL-RANKED-V1  
:heavy_minus_sign: VAL-STATUS-V1  

### DDragon

:heavy_check_mark: Champions  
:heavy_check_mark: Items  
:heavy_check_mark: SummonerSpells  
:heavy_check_mark: Profile Icons  
:heavy_check_mark: Minimaps  
:heavy_check_mark: Sprites  
