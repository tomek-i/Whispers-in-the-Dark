import { Minion } from "./Minion"
import { Game } from "../../Game"

export class Baron extends Minion {
  constructor(public readonly game: Game) {
    super({
      //TODO: how do we implement this?
      Use: (_) => null,
      description: "There are extra Outsiders in play. [+2 Outsiders]",
    })
  }

  CanUseAbility(): boolean {
    return true
  }
}
