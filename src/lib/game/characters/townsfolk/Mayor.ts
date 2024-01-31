import { Townsfolk } from "./Townsfolk"
import { Game } from "../../Game"

export class Mayor extends Townsfolk {
  constructor(public readonly game: Game) {
    super({
      Use: (_) => null,
      description:
        "If only 3 players live & no execution occurs, your team wins. If you die at night, another player might die instead.",
    })
  }
}
