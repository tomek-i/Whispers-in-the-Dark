import { Character, } from ".."
import { CharacterType } from "../../enums"
import { Ability } from "../../types"

export class Outsider extends Character {
  constructor(ability: Ability) {
    super(CharacterType.Outsider, ability)
  }
}
