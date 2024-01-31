import { Townsfolk } from "./Townsfolk"
import { Game } from "../../Game"

export class Investigator extends Townsfolk {
  //TODO: what about the Spy?
  //TODO: when does this ability trigger?
  constructor(public readonly game: Game) {
    super({
      Use: (_) => null,
      description: "You start knowing that 1 of 2 players is a particular Minion.",
    })
  }
}
