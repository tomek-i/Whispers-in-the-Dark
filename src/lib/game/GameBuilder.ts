import { Character } from "./characters"
import { Demon } from "./characters/demons/Demon"
import { Minion } from "./characters/minions/Minion"
import { Outsider } from "./characters/outsiders/Outsider"
import { Townsfolk } from "./characters/townsfolk/Townsfolk"
import { MinionCharacters } from "./factories"
import { Game } from "./Game"
import { GameMode, gameModeCharacterMap } from "./gameModes"
import { GameUtil } from "./GameUtil"
import { Player } from "./Player"

export class GameBuilder {
  private game: Game
  private availableCharacters: Character[]

  constructor(gameMode: GameMode) {
    this.game = new Game(gameMode)
    this.availableCharacters = gameModeCharacterMap[gameMode]

    return this
  }

  withPlayers(players: Player[]) {
    this.game.players = players
    return this
  }

  assignCharactersToPlayers() {
    const allocation = GameUtil.getPlayerAllocation(this.game.players.length)

    /* Pick random characters from the available characters */
    const { demons, minions, outsiders, townsfolks } = this.pickRandomCharacters(allocation)

    //TODO: what if the baron is in play?
    const baronInPlay = minions.find((item) => item.name === MinionCharacters.Baron)

    this.game.charactersInPlay = [...demons, ...minions, ...outsiders, ...townsfolks]
    this.game.charactersNotInPlay = this.availableCharacters.filter(
      (item) => !this.game.charactersInPlay.includes(item)
    )

    const characters = [...this.game.charactersInPlay]
    // Loop over the players
    this.game.players.forEach((player) => {
      // Pick a random index in the characters array
      const randomIndex = Math.floor(Math.random() * characters.length)

      // Assign the character at the random index to the player
      player.character = this.game.charactersInPlay[randomIndex]!

      // Remove the assigned character from the characters array
      characters.splice(randomIndex, 1)
    })

    return this
  }

  private pickRandomCharacters(allocation: { townsfolk: number; outsiders: number; minions: number; demons: number }) {
    const availableTownsfolk = GameUtil.getCharacterOfType(this.availableCharacters, Townsfolk)
    const availableMinions = GameUtil.getCharacterOfType(this.availableCharacters, Minion)
    const availableOutsiders = GameUtil.getCharacterOfType(this.availableCharacters, Outsider)
    const availableDemons = GameUtil.getCharacterOfType(this.availableCharacters, Demon)

    //could have use also this.availableCharacters insatead from the above 4 lines
    const demons = this.pickRandomCharactersFrom(availableDemons, allocation.demons, Demon)
    const minions = this.pickRandomCharactersFrom(availableMinions, allocation.minions, Minion)
    const outsiders = this.pickRandomCharactersFrom(availableOutsiders, allocation.outsiders, Outsider)
    const townsfolks = this.pickRandomCharactersFrom(availableTownsfolk, allocation.townsfolk, Townsfolk)

    return { demons, minions, outsiders, townsfolks }
  }

  private pickRandomCharactersFrom<T>(
    source: Character[],
    amountToPick: number,
    characterType: { new (...args: any[]): T }
  ): T[] {
    const itemsOfType = source.filter((item) => item instanceof characterType)
    const result: T[] = []
    for (let i = 0; i < amountToPick; i++) {
      const randomIndex = Math.floor(Math.random() * itemsOfType.length)
      result.push(itemsOfType[randomIndex] as T)
      itemsOfType.splice(randomIndex, 1)
    }
    return result
  }

  build() {
    return this.game
  }
}
