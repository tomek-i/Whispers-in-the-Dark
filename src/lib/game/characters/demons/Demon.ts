import { Character } from ".."
import { CharacterType } from "../../enums"
import { Ability } from "../../types"

export class Demon extends Character {
  constructor(ability: Ability) {
    super(CharacterType.Demon, ability)
  }
}
