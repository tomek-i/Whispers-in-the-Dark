import { DemonCharacterFactory, DemonCharacters } from "@/lib/game/factories"
import { testDemonCreation } from "./testHelper"

describe("DemonCharacterFactory", () => {
  it("should create a valid Imp character", () => {
    testDemonCreation(DemonCharacters.Imp, "Imp")
  })

  it("should throw an error if an invalid character is passed in", () => {
    expect(() => new DemonCharacterFactory().createCharacter("Invalid Character" as DemonCharacters)).toThrowError(
      "Invalid character: Invalid Character"
    )
  })
})
