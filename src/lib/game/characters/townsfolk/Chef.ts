import { Townsfolk } from "./Townsfolk"
import { Game } from "../../Game"

export class Chef extends Townsfolk {
  //TODO: when and how often does this trigger?
  //TODO: need to take into account about the Spy
  constructor(public readonly game: Game) {
    super({
      Use: (_) => null,
      description: "You start knowing how many pairs of evil players there are.",
    })
  }
}
