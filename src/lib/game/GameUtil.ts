import { Character } from "./characters"
import { PlayerAllocation } from "./types"

export const GameUtil = {
  getPlayerAllocation,
  getCharacterOfType,
}

function getCharacterOfType<T extends Character>(source: Character[], characterType: { new (...args: any[]): T }): T[] {
  return source.filter((character) => character instanceof characterType) as T[]
}
function getPlayerAllocation(players: number): PlayerAllocation {
  if (players < 5) {
    throw new Error("Minimum number of players is 5")
  }

  let allocation: PlayerAllocation = {
    townsfolk: 3,
    outsiders: [5, 7, 10, 13].includes(players) ? 0 : [6, 8, 11, 14].includes(players) ? 1 : 2,
    minions: players <= 9 ? 1 : players <= 12 ? 2 : 3,
    demons: 1,
  }

  if (players >= 7) {
    allocation.townsfolk = players <= 9 ? 5 : players <= 12 ? 7 : 9
  }

  return allocation
}
