import { Game } from "../../Game"
import { Player } from "../../Player"
import { Minion } from "./Minion"

export class Poisoner extends Minion {
  UseAbility(target: import("../../Player").Player | undefined) {
    throw new Error("Method not implemented.")
  }
  constructor(public readonly game: Game) {
    super({
      Use: (target: Player) => target.ApplyPoison(),
      description: "Each night, choose a player: they are poisoned tonight and tomorrow day",
    })
  }
}
