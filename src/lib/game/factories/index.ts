import { Game } from "../Game"
import { Demon } from "../characters/demons/Demon"
import { Imp } from "../characters/demons/Imp"
import { Baron } from "../characters/minions/Baron"
import { Minion } from "../characters/minions/Minion"
import { Poisoner } from "../characters/minions/Poisoner"
import { ScarletWoman } from "../characters/minions/ScarletWoman"
import { Spy } from "../characters/minions/Spy"
import { Butler } from "../characters/outsiders/Butler"
import { Drunk } from "../characters/outsiders/Drunk"
import { Outsider } from "../characters/outsiders/Outsider"
import { Recluse } from "../characters/outsiders/Recluse"
import { Saint } from "../characters/outsiders/Saint"
import { Chef } from "../characters/townsfolk/Chef"
import { Empath } from "../characters/townsfolk/Empath"
import { FortuneTeller } from "../characters/townsfolk/FortuneTeller"
import { Investigator } from "../characters/townsfolk/Investigator"
import { Librarian } from "../characters/townsfolk/Librarian"
import { Mayor } from "../characters/townsfolk/Mayor"
import { Monk } from "../characters/townsfolk/Monk"
import { Ravenkeeper } from "../characters/townsfolk/Ravenkeeper"
import { Slayer } from "../characters/townsfolk/Slayer"
import { Soldier } from "../characters/townsfolk/Soldier"
import { Townsfolk } from "../characters/townsfolk/Townsfolk"
import { Undertaker } from "../characters/townsfolk/Undertaker"
import { Virgin } from "../characters/townsfolk/Virgin"
import { Washerwoman } from "../characters/townsfolk/Washerwoman"
import { InvalidCharacterError } from "../errors"
import {
  AllCharacterClasses,
  AllCharacters,
  DemonCharacterClassMap,
  MinionCharacterClassMap,
  OutsiderCharacterClassMap,
  TownsfolkCharacterClassMap,
} from "../types"

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

export type CharacterFactory<T, TRet> = {
  createCharacter: (characterType: T, game?: Game) => TRet
  createCharacters: (characters: T[], game?: Game) => TRet[]
}
export class MinionCharacterFactory implements CharacterFactory<MinionCharacters, Minion> {
  createCharacter(character: MinionCharacters, game?: Game): Minion {
    const CharacterClass = minionCharacterClassMap[character]
    if (!CharacterClass) {
      throw new InvalidCharacterError("Invalid character: " + character)
    }
    return new CharacterClass(game)
  }

  createCharacters(characters: MinionCharacters[], game?: Game): Minion[] {
    return characters.map((char) => this.createCharacter(char, game))
  }
}
export class DemonCharacterFactory implements CharacterFactory<DemonCharacters, Demon> {
  createCharacter(character: DemonCharacters, game?: Game): Demon {
    const CharacterClass = demonCharacterClassMap[character]
    if (!CharacterClass) {
      throw new InvalidCharacterError("Invalid character: " + character)
    }
    return new CharacterClass(game)
  }

  createCharacters(characters: DemonCharacters[], game?: Game): Demon[] {
    return characters.map((char) => this.createCharacter(char, game))
  }
}
export class OutsiderCharacterFactory implements CharacterFactory<OutsiderCharacters, Outsider> {
  createCharacter(character: OutsiderCharacters, game?: Game): Outsider {
    const CharacterClass = outsiderCharacterClassMap[character]
    if (!CharacterClass) {
      throw new InvalidCharacterError("Invalid character: " + character)
    }
    return new CharacterClass(game)
  }

  createCharacters(characters: OutsiderCharacters[], game?: Game): Outsider[] {
    return characters.map((char) => this.createCharacter(char, game))
  }
}
export class TownsfolkCharacterFactory implements CharacterFactory<TownsfolkCharacters, Townsfolk> {
  createCharacter(character: TownsfolkCharacters, game?: Game): Townsfolk {
    const CharacterClass = townsfolkCharacterClassMap[character]
    if (!CharacterClass) {
      throw new InvalidCharacterError("Invalid character: " + character)
    }
    return new CharacterClass(game)
  }

  createCharacters(characters: TownsfolkCharacters[], game?: Game): Townsfolk[] {
    return characters.map((char) => this.createCharacter(char, game))
  }
}

// Combine all character class maps into one
export const allCharacterClassMap = {
  ...townsfolkCharacterClassMap,
  ...minionCharacterClassMap,
  ...demonCharacterClassMap,
  ...outsiderCharacterClassMap,
}

export class AllCharactersFactory implements CharacterFactory<AllCharacters, AllCharacterClasses> {
  createCharacter(character: AllCharacters, game?: Game): AllCharacterClasses {
    const CharacterClass = allCharacterClassMap[character]
    if (!CharacterClass) {
      throw new InvalidCharacterError("Invalid character: " + character)
    }
    return new CharacterClass(game)
  }

  createCharacters(characters: AllCharacters[], game?: Game): AllCharacterClasses[] {
    return characters.map((char) => this.createCharacter(char, game))
  }
}
