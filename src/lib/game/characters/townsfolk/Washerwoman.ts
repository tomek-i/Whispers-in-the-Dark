import { Townsfolk } from "./Townsfolk"
import { Game } from "../../Game"

export class Washerwoman extends Townsfolk {
  //TODO: need to check when they get to use this ability
  constructor(public readonly game: Game) {
    super({
      Use: (_) => null,
      description: "You start knowing that 1 of 2 players is a particular Townsfolk.",
    })
  }
}
