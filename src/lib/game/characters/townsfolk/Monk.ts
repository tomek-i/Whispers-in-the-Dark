import { Game } from "../../Game"
import { Townsfolk } from "./Townsfolk"

export class Monk extends Townsfolk {
  constructor(public readonly game: Game) {
    super({
      Use: (_) => null,
      description: "Each night*, choose a player (not yourself): they are safe from the Demon tonight.",
    })
  }
}
