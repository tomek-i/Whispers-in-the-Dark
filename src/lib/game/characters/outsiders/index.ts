import { Character, CharacterType } from ".."

export class Outsider extends Character {
  constructor() {
    super(CharacterType.Outsider)
  }
}

export class Recluse extends Outsider {
  //You might register as evil & as a Minion or Demon, even if dead.
}

export class Saint extends Outsider {
  //If you die by execution, your team loses
}

export class Drunk extends Outsider {
  //You do not know you are the Drunk. You think you are a Townsfolk character, but you are not
}

export class Butler extends Outsider {
  //Each night, choose a player (not yourself): tomorrow, you may only vote if they are voting too.
}
