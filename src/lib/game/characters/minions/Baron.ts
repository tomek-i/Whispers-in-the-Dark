import { Game } from "../../Game"
import { Minion } from "./Minion"

export class Baron extends Minion {
  constructor(public readonly game: Game) {
    super({
      Use: (_) => null,
      description: "There are extra Outsiders in play. [+2 Outsiders]",
    })
  }

  CanUseAbility(): boolean {
    return true
  }
}
