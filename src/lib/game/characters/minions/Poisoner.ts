import { Game } from "../../Game"
import { Minion } from "./Minion"

export class Poisoner extends Minion {
  constructor(public readonly game: Game) {
    super({
      description: "Each night, choose a player: they are poisoned tonight and tomorrow day",
    })
  }
}
