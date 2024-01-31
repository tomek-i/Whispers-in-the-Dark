import { Townsfolk } from "./Townsfolk"
import { Game } from "../../Game"

export class Ravenkeeper extends Townsfolk {
  constructor(public readonly game: Game) {
    super({
      Use: (_) => null,
      description: "If you die at night, you are woken to choose a player: you learn their character",
    })
  }
}
