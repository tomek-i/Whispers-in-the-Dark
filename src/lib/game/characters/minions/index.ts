import { Character, CharacterType } from ".."

export class Minion extends Character {
  constructor() {
    super(CharacterType.Minion)
  }
}
export class Poisoner extends Minion {
  //Each night, choose a player: they are poisoned tonight and tomorrow day
}
export class Spy extends Minion {
  //Each night, you see the Grimoire. You might register as good & as a Townsfolk or Outsider, even if dead
}
export class ScarletWoman extends Minion {
  //
}
export class Baron extends Minion {
  //There are extra Outsiders in play. [+2 Outsiders]
}
