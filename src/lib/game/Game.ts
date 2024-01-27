import { Character } from "./characters"
import { GameMode } from "./gameModes"
import { Player } from "./Player"

export class Game {
  readonly #code: string = ""
  #night: number = 1

  #players: Player[] = []

  #charactersNotInPlay: Character[] = []
  #charactersInPlay: Character[] = []

  constructor(public gameMode: GameMode) {
    this.#code = Math.random().toString(36).substring(2, 7).toUpperCase()
  }

  //TODO: perhaps need to implement StartNight() and EndNight() methods
  sleep() {
    this.#night++
  }

  get night(): number {
    return this.#night
  }

  get code(): string {
    return this.#code
  }

  set players(players: Player[]) {
    this.#players = players
  }
  get players(): Player[] {
    return this.#players
  }

  get charactersNotInPlay(): Character[] {
    return this.#charactersNotInPlay
  }
  set charactersNotInPlay(characters: Character[]) {
    this.#charactersNotInPlay = characters
  }

  set charactersInPlay(characters: Character[]) {
    this.#charactersInPlay = characters
  }

  get charactersInPlay(): Character[] {
    return this.#charactersInPlay
  }
}
