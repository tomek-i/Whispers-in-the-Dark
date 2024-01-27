import { Game } from "../../Game"
import { Townsfolk } from "./Townsfolk"

export class Mayor extends Townsfolk {
  constructor(public readonly game: Game) {
    super({
      description:
        "If only 3 players live & no execution occurs, your team wins. If you die at night, another player might die instead.",
    })
  }
}
