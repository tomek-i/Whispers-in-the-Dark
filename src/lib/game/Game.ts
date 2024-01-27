import { EventEmitter } from "events"
import { Player } from "./Player"
import { Character } from "./characters"
import { Demon } from "./characters/demons/Demon"
import { ScarletWoman } from "./characters/minions"
import { GameMode } from "./gameModes"

export class Game {
  readonly #code: string = ""
  #night: number = 1

  #players: Player[] = []

  #charactersNotInPlay: Character[] = []
  #charactersInPlay: Character[] = []

  #playerDeathEmitter: EventEmitter = new EventEmitter()
  #nightStartEmitter: EventEmitter = new EventEmitter()
  #nightEndEmitter: EventEmitter = new EventEmitter()

  constructor(public gameMode: GameMode) {
    this.#code = Math.random().toString(36).substring(2, 7).toUpperCase()
  }

  // Method to subscribe to player death events
  onPlayerDeath(listener: (player: Player) => void) {
    this.#playerDeathEmitter.on("playerDeath", listener)
  }

  // Method to be called when a player dies
  playerDied(player: Player) {
    // Other logic related to player death...
    //TODO: if player is demon and scarlet woman is in play and players > 5, scarlet woman becomes demon
    if (!this.IsDemonAlive()) {
      //TODO: game is over
    }
    // Emit the player death event
    this.#playerDeathEmitter.emit("playerDeath", player)
  }

  //if demon is alive or scarlet woman is demon and alive
  IsDemonAlive(): boolean {
    return this.players.some((player) => {
      const isDemonAlive = player.character instanceof Demon && player.IsAlive()
      const isScarletWomanAliveAndDemon =
        player.character instanceof ScarletWoman && player.character.isDemon && player.IsAlive()
      return isDemonAlive || isScarletWomanAliveAndDemon
    })
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
    for (const player of players) {
      player.game = this
    }
    //TODO: should the current game know about the allocation and should we set here the game allocation instead of the gamebuilder?
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
