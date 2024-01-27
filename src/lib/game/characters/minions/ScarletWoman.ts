import { Game } from "../../Game"
import { Minion } from "./Minion"

export class ScarletWoman extends Minion {
  //TODO: does the player find out that they become now the demon when the actual demon dies?
  isDemon = false
  constructor(public readonly game: Game) {
    super({
      description:
        "If there are 5 or more players alive (Travellers don’t count) & the Demon dies, you become the Demon",
    })
  }
}
