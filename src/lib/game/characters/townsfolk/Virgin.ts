import { Game } from "../../Game"
import { Townsfolk } from "./Townsfolk"

export class Virgin extends Townsfolk {
  //TODO: need to figure out edge cases about the nominations
  constructor(public readonly game: Game) {
    super({
      Use: (_) => null,
      description: "The 1st time you are nominated, if the nominator is a Townsfolk, they are executed immediately.",
    })
  }
}
