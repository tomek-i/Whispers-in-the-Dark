import { EventEmitter } from "events"
import { Character } from "./characters"
import { Demon } from "./characters/demons/Demon"
import { GameMode } from "./gameModes"
import { Player } from "./Player"

export class Game {
  code: string = ""
  night: number = 1

  players: Player[] = []
  GameMaster: Player
  charactersNotInPlay: Character[] = []
  charactersInPlay: Character[] = []

  #playerDeathEmitter: EventEmitter = new EventEmitter()
  #nightStartEmitter: EventEmitter = new EventEmitter()
  #nightEndEmitter: EventEmitter = new EventEmitter()

  constructor(
    public gameMode: GameMode,
    gameMaster: Player
  ) {
    this.GameMaster = gameMaster
    //TODO: probably not needed
    // this.code = Math.random().toString(36).substring(2, 7).toUpperCase()
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
}
