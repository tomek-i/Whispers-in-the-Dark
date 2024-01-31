import { Townsfolk } from "./Townsfolk"
import { Game } from "../../Game"

export class Monk extends Townsfolk {
  constructor(public readonly game: Game) {
    super({
      Use: (_) => null,
      description: "Each night*, choose a player (not yourself): they are safe from the Demon tonight.",
    })
  }
}
