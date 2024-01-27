import { Game } from "../../Game"
import { Demon } from "./Demon"

export class Imp extends Demon {
  constructor(public readonly game: Game) {
    super({
      description: "Each night*, choose a player: they die. If you kill yourself this way, a Minion becomes the Imp.",
    })
  }
  CanUseAbility(): boolean {
    return super.CanUseAbility() && this.game.night > 1
  }
}
