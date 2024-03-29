import { Townsfolk } from "./Townsfolk"
import { Game } from "../../Game"

export class Undertaker extends Townsfolk {
  //TODO: only 1 player can only die from execution?
  constructor(public readonly game: Game) {
    super({
      Use: (_) => null,
      description: "Each night*, you learn which character died by execution today.",
    })
  }
}
