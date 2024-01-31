import { Townsfolk } from "./Townsfolk"
import { Game } from "../../Game"

export class Slayer extends Townsfolk {
  constructor(public readonly game: Game) {
    super({
      Use: (_) => null,
      description: "Once per game, during the day, publicly choose a player: if they are the Demon, they die.",
    })
  }
}
