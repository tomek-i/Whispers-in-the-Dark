import { Townsfolk } from "./Townsfolk"
import { Game } from "../../Game"

export class Librarian extends Townsfolk {
  //TODO: need find out exaclty how to implement this
  //TODO: does this include the Spy?
  constructor(public readonly game: Game) {
    super({
      Use: (_) => null,
      description: "You start knowing that 1 of 2 players is a particular Outsider. (Or that zero are in play.)",
    })
  }
}
