import { Game } from "../../Game"
import { Townsfolk } from "./Townsfolk"

export class Washerwoman extends Townsfolk {
  //TODO: need to check when they get to use this ability
  constructor(public readonly game: Game) {
    super({
      description: "You start knowing that 1 of 2 players is a particular Townsfolk.",
    })
  }
}
