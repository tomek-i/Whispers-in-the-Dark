import { Game } from "../../Game"
import { Outsider } from "./Outsider"

export class Recluse extends Outsider {
  //TODO: see how this is done with the Spy
  constructor(public readonly game: Game) {
    super({
      Use: (_) => null,
      description: "You might register as evil & as a Minion or Demon, even if dead.",
    })
  }
}
