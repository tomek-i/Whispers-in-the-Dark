import { GameUtil } from "@/lib/game/GameUtil"
import { Character } from "@/lib/game/characters"
import { Demon } from "@/lib/game/characters/demons/Demon"
import { Imp } from "@/lib/game/characters/demons/Imp"
import { Baron } from "@/lib/game/characters/minions/Baron"
import { Minion } from "@/lib/game/characters/minions/Minion"
import { Poisoner } from "@/lib/game/characters/minions/Poisoner"
import { ScarletWoman } from "@/lib/game/characters/minions/ScarletWoman"
import { Spy } from "@/lib/game/characters/minions/Spy"
import { Butler } from "@/lib/game/characters/outsiders/Butler"
import { Drunk } from "@/lib/game/characters/outsiders/Drunk"
import { Outsider } from "@/lib/game/characters/outsiders/Outsider"
import { Recluse } from "@/lib/game/characters/outsiders/Recluse"
import { Saint } from "@/lib/game/characters/outsiders/Saint"
import { Chef } from "@/lib/game/characters/townsfolk/Chef"
import { Empath } from "@/lib/game/characters/townsfolk/Empath"
import { FortuneTeller } from "@/lib/game/characters/townsfolk/FortuneTeller"
import { Investigator } from "@/lib/game/characters/townsfolk/Investigator"
import { Librarian } from "@/lib/game/characters/townsfolk/Librarian"
import { Mayor } from "@/lib/game/characters/townsfolk/Mayor"
import { Monk } from "@/lib/game/characters/townsfolk/Monk"
import { Ravenkeeper } from "@/lib/game/characters/townsfolk/Ravenkeeper"
import { Slayer } from "@/lib/game/characters/townsfolk/Slayer"
import { Soldier } from "@/lib/game/characters/townsfolk/Soldier"
import { Townsfolk } from "@/lib/game/characters/townsfolk/Townsfolk"
import { Undertaker } from "@/lib/game/characters/townsfolk/Undertaker"
import { Virgin } from "@/lib/game/characters/townsfolk/Virgin"
import { Washerwoman } from "@/lib/game/characters/townsfolk/Washerwoman"
import { GameMode, GetCharactersForGameMode } from "@/lib/game/gameModes"
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
