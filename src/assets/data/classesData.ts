export class classTemplate {
  id: number
  name: { base: string } | { base: string; prom: string }
  constructor(id?: number, name?: { base: string } | { base: string; prom: string }) {
    this.id = id ?? 0
    this.name = name ?? { base: 'None Base', prom: 'None Prom' }
  }
}
export const classesDataMerc = [
  { id: 102, name: { base: 'fighter', prom: 'vanguard' } },
  { id: 103, name: { base: 'soldier', prom: 'sergeant' } },
  { id: 104, name: { base: 'housecarl', prom: 'viking' } },
  { id: 105, name: { base: 'swordfighter', prom: 'swordmaster' } },
  { id: 106, name: { base: 'sellsword', prom: 'landsknecht' } },
  { id: 107, name: { base: 'hoplite', prom: 'legionnaire' } },
  { id: 108, name: { base: 'gladiator', prom: 'berserker' } },
  { id: 109, name: { base: 'warrior', prom: 'breaker' } },
  { id: 110, name: { base: 'hunter', prom: 'sniper' } },
  { id: 111, name: { base: 'arbalest', prom: 'shieldshooter' } },
  { id: 112, name: { base: 'thief', prom: 'rogue' } },
  { id: 113, name: { base: 'knight', prom: 'great knight' } },
  { id: 114, name: { base: 'radiant knight', prom: 'sainted knight' } },
  { id: 115, name: { base: 'dark knight', prom: 'doom knight' } },
  { id: 116, name: { base: 'cleric', prom: 'bishop' } },
  { id: 117, name: { base: 'wizard', prom: 'warlock' } },
  { id: 118, name: { base: 'witch', prom: 'sorceress' } },
  { id: 119, name: { base: 'shaman', prom: 'druid' } },
  { id: 120, name: { base: 'wyvern knight', prom: 'wyvern master' } },
  { id: 121, name: { base: 'gryphon knight', prom: 'gryphon master' } },
  { id: 122, name: { base: 'elven archer' } }
]
export const classesDataNoMerc = [
  { id: 101, name: { base: 'lord', prom: 'high lord' } },
  { id: 123, name: { base: 'feathersword' } },
  { id: 124, name: { base: 'priestess', prom: 'high priestess' } },
  { id: 125, name: { base: 'crusader', prom: 'valkyria' } },
  { id: 127, name: { base: 'paladin' } },
  { id: 128, name: { base: 'prince' } },
  { id: 129, name: { base: 'dark marquess' } },
  { id: 126, name: { base: 'elven augur' } }
]
