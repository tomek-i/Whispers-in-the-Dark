import { Character } from "@/lib/game/characters"
import { Demon, Imp } from "@/lib/game/characters/demons"
import { Baron, Minion, Poisoner, ScarletWoman, Spy } from "@/lib/game/characters/minions"
import { Butler, Drunk, Outsider, Recluse, Saint } from "@/lib/game/characters/outsiders"
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
} from "@/lib/game/characters/townsfolk"
import { GameMode, GetCharactersForGameMode } from "@/lib/game/gameModes"
import { GameUtil } from "@/lib/game/GameUtil"
describe("Game TroubleBrewing available characters", () => {
  let characters: Character[]

  beforeAll(() => {
    characters = GetCharactersForGameMode(GameMode.TroubleBrewing)
  })

  it("should have a 13 townfolk characters", () => {
    // Arrange
    const expectedCharacters = [
      Washerwoman,
      Librarian,
      Investigator,
      Chef,
      Empath,
      FortuneTeller,
      Undertaker,
      Monk,
      Ravenkeeper,
      Virgin,
      Slayer,
      Soldier,
      Mayor,
    ]
    // Act
    const townsfolk = GameUtil.getCharacterOfType(characters, Townsfolk)
    // Assert
    expectInstances(townsfolk, expectedCharacters)
  })
  it("should have a 4 outsider characters", () => {
    // Arrange
    const expectedClasses = [Butler, Drunk, Recluse, Saint]
    // Act
    const outsiders = GameUtil.getCharacterOfType(characters, Outsider)

    // Assert
    expectInstances(outsiders, expectedClasses)
  })
  it("should have a 4 minion characters", () => {
    // Arrange
    const expectedClasses = [Poisoner, Baron, Spy, ScarletWoman]
    // Act
    const minions = GameUtil.getCharacterOfType(characters, Minion)
    // Assert
    expectInstances(minions, expectedClasses)
  })
  it("should have 1 demon characters", () => {
    // Arrange
    const expectedClasses = [Imp]
    // Act
    const demon = GameUtil.getCharacterOfType(characters, Demon)
    // Assert
    expectInstances(demon, expectedClasses)
  })

  /**
   * Checks if an array contains exactly one instance of each specified class.
   *
   * @template T The type of the items in the array.
   * @param {T[]} array The array to check.
   * @param {{ new(...args: any[]): T }[]} expectedClasses The classes to check for.
   *
   * The function performs the following checks:
   * 1. Checks if the length of the array matches the length of the expectedClasses array.
   * 2. Checks if every item in the array is an instance of one of the classes in expectedClasses.
   * 3. Checks if for each class in expectedClasses, there is at least one item in the array that is an instance of that class.
   */
  function expectInstances<T>(array: T[], expectedClasses: { new (...args: any[]): T }[]) {
    expect(array).toHaveLength(expectedClasses.length)
    expect(array.every((item) => expectedClasses.some((ExpectedClass) => item instanceof ExpectedClass))).toBe(true)
    expectedClasses.forEach((ExpectedClass) => {
      expect(array.some((item) => item instanceof ExpectedClass)).toBe(true)
    })
  }
})
