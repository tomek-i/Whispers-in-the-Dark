import { Character } from "@/lib/game/characters"
import { Role } from "@/lib/game/enums"
import {
  CharacterFactory,
  DemonCharacterFactory,
  DemonCharacters,
  MinionCharacterFactory,
  MinionCharacters,
  OutsiderCharacterFactory,
  OutsiderCharacters,
  TownsfolkCharacterFactory,
  TownsfolkCharacters,
} from "@/lib/game/factories"

function testCharacterCreation<T, TRet extends Character>(
  factory: CharacterFactory<T, TRet>,
  characterType: T,
  expectedName: string,
  expectedRole: Role
) {
  const character = factory.createCharacter(characterType, undefined)

  expect(character).toBeDefined()
  expect(character.name).toBeDefined()
  expect(character.name).toBe(expectedName)
  expect(character.role).toBeDefined()
  expect(character.role).toBe(expectedRole)
}

export const testMinionCreation = (minion: MinionCharacters, name: string) =>
  testCharacterCreation(new MinionCharacterFactory(), minion, name, Role.Evil)

export const testOutsiderCreation = (outsider: OutsiderCharacters, name: string) =>
  testCharacterCreation(new OutsiderCharacterFactory(), outsider, name, Role.Good)

export const testDemonCreation = (demon: DemonCharacters, name: string) =>
  testCharacterCreation(new DemonCharacterFactory(), demon, name, Role.Evil)

export const testTownsfolkCreation = (townsfolk: TownsfolkCharacters, name: string) =>
  testCharacterCreation(new TownsfolkCharacterFactory(), townsfolk, name, Role.Good)
