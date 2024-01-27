import { Character } from ".."
import { CharacterType } from "../../enums"
import { Ability } from "../../types"

export class Townsfolk extends Character {
  constructor(ability: Ability) {
    super(CharacterType.Townsfolk, ability)
  }
}
