import { Character, CharacterType } from ".."

export class Demon extends Character {
  constructor() {
    super(CharacterType.Demon)
  }
}

export class Imp extends Demon {
  //Each night*, choose a player: they die. If you kill yourself this way, a Minion becomes the Imp.
}
