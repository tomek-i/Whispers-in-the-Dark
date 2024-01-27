import { Role } from "@/lib/game/characters"
import { DemonCharacterFactory, DemonCharacters } from "@/lib/game/factories"

describe("DemonCharacterFactory", () => {
  it("should create a valid Imp character", () => {
    const character = DemonCharacterFactory.createCharacter(DemonCharacters.Imp)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Imp")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Evil)
  })

  it("should throw an error if an invalid character is passed in", () => {
    expect(() => DemonCharacterFactory.createCharacter("Invalid Character" as DemonCharacters)).toThrowError(
      "Invalid character: Invalid Character"
    )
  })
})
