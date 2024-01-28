import { Game } from "../../Game"
import { Townsfolk } from "./Townsfolk"

export class FortuneTeller extends Townsfolk {
  //TODO: what if scarlet women and demon are picked and demon is alive?
  //TODO: what if scarlet women and demon are picked and demon is dead?
  //TODO: what if scharlet women is picked and a random player and demon is alive?
  //TODO: what if scharlet women is picked and a random player and demon is dead?
  constructor(public readonly game: Game) {
    super({
      Use: (_) => null,
      description:
        "Each night, choose 2 players: you learn if either is a Demon. There is a good player that registers as a Demon to you.",
    })
  }
}
