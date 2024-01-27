import { MinionCharacterFactory, MinionCharacters } from "@/lib/game/factories"
import { testMinionCreation } from "./testHelper"

describe("MinionCharacterFactory", () => {
  it("should create a valid Baron character", () => {
    testMinionCreation(MinionCharacters.Baron, "Baron")
  })

  it("should create a valid Poisoner character", () => {
    testMinionCreation(MinionCharacters.Poisoner, "Poisoner")
  })

  it("should create a valid ScarletWoman character", () => {
    testMinionCreation(MinionCharacters.ScarletWoman, "ScarletWoman")
  })

  it("should create a valid Spy character", () => {
    testMinionCreation(MinionCharacters.Spy, "Spy")
  })

  it("should throw an error if an invalid character is passed in", () => {
    expect(() => new MinionCharacterFactory().createCharacter("Invalid Character" as MinionCharacters)).toThrowError(
      "Invalid character: Invalid Character"
    )
  })
})
