import { Role } from "@/lib/game/characters"
import { OutsiderCharacterFactory, OutsiderCharacters } from "@/lib/game/factories"

describe("OutsiderCharacterFactory", () => {
  it("should create a valid Butler character", () => {
    const character = OutsiderCharacterFactory.createCharacter(OutsiderCharacters.Butler)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Butler")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Drunk character", () => {
    const character = OutsiderCharacterFactory.createCharacter(OutsiderCharacters.Drunk)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Drunk")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid ScarletWoman character", () => {
    const character = OutsiderCharacterFactory.createCharacter(OutsiderCharacters.Recluse)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Recluse")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Saint character", () => {
    const character = OutsiderCharacterFactory.createCharacter(OutsiderCharacters.Saint)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Saint")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should throw an error if an invalid character is passed in", () => {
    expect(() => OutsiderCharacterFactory.createCharacter("Invalid Character" as OutsiderCharacters)).toThrowError(
      "Invalid character: Invalid Character"
    )
  })
})
