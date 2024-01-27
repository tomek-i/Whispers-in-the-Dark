import { Game } from "../../Game"
import { Demon } from "../demons/Demon"
import { Minion } from "./Minion"

export class ScarletWoman extends Minion {
  //TODO: does the player find out that they become now the demon when the actual demon dies?
  isDemon = false
  constructor(public readonly game: Game) {
    super({
      Use: (_) => {
        if (this.game.players.length >= 5 && this.game.IsDemonAlive()) {
          this.isDemon = true
        }
      },
      description:
        "If there are 5 or more players alive (Travellers don’t count) & the Demon dies, you become the Demon",
    })

    this.game?.onPlayerDeath((deadPlayer) => {
      if (deadPlayer.character instanceof Demon) {
        this.isDemon = true
      }
    })
  }
}
