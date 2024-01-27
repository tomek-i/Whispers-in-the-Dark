import { Game } from "../../Game"
import { Townsfolk } from "./Townsfolk"

export class Slayer extends Townsfolk {
  constructor(public readonly game: Game) {
    super({
      description: "Once per game, during the day, publicly choose a player: if they are the Demon, they die.",
    })
  }
}
