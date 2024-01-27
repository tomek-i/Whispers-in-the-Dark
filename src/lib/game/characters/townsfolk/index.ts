import { Character, CharacterType } from ".."

export class Townsfolk extends Character {
  constructor() {
    super(CharacterType.Townsfolk)
  }
}

export class Washerwoman extends Townsfolk {
  // "You start knowing that 1 of 2 players is a particular Townsfolk."
}
export class Librarian extends Townsfolk {
  //You start knowing that 1 of 2 players is a particular Outsider. (Or that zero are in play.)
}
export class Investigator extends Townsfolk {
  //You start knowing that 1 of 2 players is a particular Minion.
}
export class Chef extends Townsfolk {
  //You start knowing how many pairs of evil players there are.
}
export class Empath extends Townsfolk {
  //Each night, you learn how many of your 2 alive neighbours are evil
}
export class FortuneTeller extends Townsfolk {
  //Each night, choose 2 players: you learn if either is a Demon. There is a good player that registers as a Demon to you.
}
export class Undertaker extends Townsfolk {
  //Each night*, you learn which character died by execution today.
}
export class Monk extends Townsfolk {
  //Each night*, choose a player (not yourself): they are safe from the Demon tonight.
}
export class Ravenkeeper extends Townsfolk {
  //If you die at night, you are woken to choose a player: you learn their character
}
export class Virgin extends Townsfolk {
  //The 1st time you are nominated, if the nominator is a Townsfolk, they are executed immediately.
}
export class Slayer extends Townsfolk {}
//Once per game, during the day, publicly choose a player: if they are the Demon, they die.

export class Soldier extends Townsfolk {
  //You are safe from the Demon
}
export class Mayor extends Townsfolk {
  //If only 3 players live & no execution occurs, your team wins. If you die at night, another player might die instead.
}
