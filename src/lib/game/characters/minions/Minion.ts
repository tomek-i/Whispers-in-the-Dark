import { Character } from ".."
import { CharacterType } from "../../enums"
import { Ability } from "../../types"

export class Minion extends Character {
  constructor(ability: Ability) {
    super(CharacterType.Minion, ability)
  }
}
