import { OutsiderCharacterFactory, OutsiderCharacters } from "@/lib/game/factories"
import { testOutsiderCreation } from "./testHelper"

describe("OutsiderCharacterFactory", () => {
  it("should create a valid Butler character", () => {
    testOutsiderCreation(OutsiderCharacters.Butler, "Butler")
  })

  it("should create a valid Drunk character", () => {
    testOutsiderCreation(OutsiderCharacters.Drunk, "Drunk")
  })

  it("should create a valid ScarletWoman character", () => {
    testOutsiderCreation(OutsiderCharacters.Recluse, "Recluse")
  })

  it("should create a valid Saint character", () => {
    testOutsiderCreation(OutsiderCharacters.Saint, "Saint")
  })

  it("should throw an error if an invalid character is passed in", () => {
    expect(() =>
      new OutsiderCharacterFactory().createCharacter("Invalid Character" as OutsiderCharacters)
    ).toThrowError("Invalid character: Invalid Character")
  })
})
