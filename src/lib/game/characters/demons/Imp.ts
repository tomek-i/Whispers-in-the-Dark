import { Game } from "../../Game"
import { AbilityUsageError } from "../../errors"
import { Soldier } from "../townsfolk"
import { Demon } from "./Demon"

export class Imp extends Demon {
  constructor(public readonly game: Game) {
    super({
      Use: (target) => {
        if (this.game.night <= 1) throw new AbilityUsageError("You can't use your ability on the first night")
        const IsSoldier = target.character instanceof Soldier
        if (!IsSoldier) target.Die()
      },
      description: "Each night*, choose a player: they die. If you kill yourself this way, a Minion becomes the Imp.",
    })
  }

  CanUseAbility(): boolean {
    return this.game.night > 1
  }
}
