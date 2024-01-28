import { Game } from "../../Game"
import { Townsfolk } from "./Townsfolk"

export class Soldier extends Townsfolk {
  //
  constructor(public readonly game: Game) {
    super({
      Use: (_) => null,
      description: "You are safe from the Demon",
    })
  }
}
