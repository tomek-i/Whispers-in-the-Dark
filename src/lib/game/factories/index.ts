import { Demon, Imp } from "../characters/demons"
import { Baron, Minion, Poisoner, ScarletWoman, Spy } from "../characters/minions"
import { Butler, Drunk, Outsider, Recluse, Saint } from "../characters/outsiders"
import {
  Chef,
  Empath,
  FortuneTeller,
  Investigator,
  Librarian,
  Mayor,
  Monk,
  Ravenkeeper,
  Slayer,
  Soldier,
  Townsfolk,
  Undertaker,
  Virgin,
  Washerwoman,
} from "../characters/townsfolk"
import { InvalidCharacterError } from "../errors"

export enum DemonCharacters {
  Imp = "Imp",
}

export enum MinionCharacters {
  Baron = "Baron",
  Poisoner = "Poisoner",
  ScarletWoman = "ScarletWoman",
  Spy = "Spy",
}

export enum OutsiderCharacters {
  Butler = "Butler",
  Drunk = "Drunk",
  Recluse = "Recluse",
  Saint = "Saint",
}
export enum TownsfolkCharacters {
  Washerwoman = "Washerwoman",
  Librarian = "Librarian",
  Investigator = "investigator",
  Chef = "Chef",
  Empath = "Empath",
  FortuneTeller = "Fortune Teller",
  Undertaker = "Undertaker",
  Monk = "Monk",
  Ravenkeeper = "Ravenkeeper",
  Virgin = "Virgin",
  Slayer = "Slayer",
  Soldier = "Soldier",
  Mayor = "Mayor",
}

type DemonCharacterClassMap = Record<DemonCharacters, new () => Demon>
type MinionCharacterClassMap = Record<MinionCharacters, new () => Minion>
type OutsiderCharacterClassMap = Record<OutsiderCharacters, new () => Outsider>
type TownsfolkCharacterClassMap = Record<TownsfolkCharacters, new () => Townsfolk>

const demonCharacterClassMap: DemonCharacterClassMap = {
  [DemonCharacters.Imp]: Imp,
}

const minionCharacterClassMap: MinionCharacterClassMap = {
  [MinionCharacters.Baron]: Baron,
  [MinionCharacters.Poisoner]: Poisoner,
  [MinionCharacters.ScarletWoman]: ScarletWoman,
  [MinionCharacters.Spy]: Spy,
}
const outsiderCharacterClassMap: OutsiderCharacterClassMap = {
  [OutsiderCharacters.Butler]: Butler,
  [OutsiderCharacters.Drunk]: Drunk,
  [OutsiderCharacters.Recluse]: Recluse,
  [OutsiderCharacters.Saint]: Saint,
}
const townsfolkCharacterClassMap: TownsfolkCharacterClassMap = {
  [TownsfolkCharacters.Washerwoman]: Washerwoman,
  [TownsfolkCharacters.Librarian]: Librarian,
  [TownsfolkCharacters.Investigator]: Investigator,
  [TownsfolkCharacters.Chef]: Chef,
  [TownsfolkCharacters.Empath]: Empath,
  [TownsfolkCharacters.FortuneTeller]: FortuneTeller,
  [TownsfolkCharacters.Undertaker]: Undertaker,
  [TownsfolkCharacters.Monk]: Monk,
  [TownsfolkCharacters.Ravenkeeper]: Ravenkeeper,
  [TownsfolkCharacters.Virgin]: Virgin,
  [TownsfolkCharacters.Soldier]: Soldier,
  [TownsfolkCharacters.Mayor]: Mayor,
  [TownsfolkCharacters.Slayer]: Slayer,
}

export class MinionCharacterFactory {
  static createCharacter(character: MinionCharacters): Minion {
    const CharacterClass = minionCharacterClassMap[character]
    if (!CharacterClass) {
      throw new InvalidCharacterError("Invalid character: " + character)
    }
    return new CharacterClass()
  }

  static createCharacters(characters: MinionCharacters[]): Minion[] {
    return characters.map((character) => this.createCharacter(character))
  }
}
export class DemonCharacterFactory {
  static createCharacter(character: DemonCharacters): Demon {
    const CharacterClass = demonCharacterClassMap[character]
    if (!CharacterClass) {
      throw new InvalidCharacterError("Invalid character: " + character)
    }
    return new CharacterClass()
  }

  static createCharacters(characters: DemonCharacters[]): Demon[] {
    return characters.map((character) => this.createCharacter(character))
  }
}
export class OutsiderCharacterFactory {
  static createCharacter(character: OutsiderCharacters): Outsider {
    const CharacterClass = outsiderCharacterClassMap[character]
    if (!CharacterClass) {
      throw new InvalidCharacterError("Invalid character: " + character)
    }
    return new CharacterClass()
  }

  static createCharacters(characters: OutsiderCharacters[]): Outsider[] {
    return characters.map((character) => this.createCharacter(character))
  }
}
export class TownsfolkCharacterFactory {
  static createCharacter(character: TownsfolkCharacters): Townsfolk {
    const CharacterClass = townsfolkCharacterClassMap[character]
    if (!CharacterClass) {
      throw new InvalidCharacterError("Invalid character: " + character)
    }
    return new CharacterClass()
  }

  static createCharacters(characters: TownsfolkCharacters[]): Townsfolk[] {
    return characters.map((character) => this.createCharacter(character))
  }
}

// Combine all character class maps into one
export const allCharacterClassMap = {
  ...townsfolkCharacterClassMap,
  ...minionCharacterClassMap,
  ...demonCharacterClassMap,
  ...outsiderCharacterClassMap, // assuming you have a similar map for OutsiderCharacters
}

// Define a type that includes all character types
export type AllCharacters = TownsfolkCharacters | MinionCharacters | DemonCharacters | OutsiderCharacters

// Define a type that includes all character classes
export type AllCharacterClasses = Townsfolk | Minion | Demon | Outsider // assuming you have a similar class for Outsider

export class CharacterFactory {
  static createCharacter(character: AllCharacters): AllCharacterClasses {
    const CharacterClass = allCharacterClassMap[character]
    if (!CharacterClass) {
      throw new InvalidCharacterError("Invalid character: " + character)
    }
    return new CharacterClass()
  }

  static createCharacters(characters: AllCharacters[]): AllCharacterClasses[] {
    return characters.map((character) => this.createCharacter(character))
  }
}
