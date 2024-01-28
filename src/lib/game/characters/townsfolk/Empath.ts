import { Game } from "../../Game"
import { Townsfolk } from "./Townsfolk"

export class Empath extends Townsfolk {
  //TODO: need to take into account about the Spy
  constructor(public readonly game: Game) {
    super({
      Use: (_) => null,
      description: "Each night, you learn how many of your 2 alive neighbours are evil",
    })
  }
}
