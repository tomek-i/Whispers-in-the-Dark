import { Game } from "../../Game"
import { Townsfolk } from "./Townsfolk"

export class Undertaker extends Townsfolk {
  //TODO: only 1 player can only die from execution?
  constructor(public readonly game: Game) {
    super({
      description: "Each night*, you learn which character died by execution today.",
    })
  }
}
