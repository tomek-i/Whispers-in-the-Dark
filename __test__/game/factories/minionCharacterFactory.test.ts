import { Role } from "@/lib/game/characters"
import { MinionCharacterFactory, MinionCharacters } from "@/lib/game/factories"

describe("MinionCharacterFactory", () => {
  it("should create a valid Baron character", () => {
    const character = MinionCharacterFactory.createCharacter(MinionCharacters.Baron)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Baron")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Evil)
  })

  it("should create a valid Poisoner character", () => {
    const character = MinionCharacterFactory.createCharacter(MinionCharacters.Poisoner)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Poisoner")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Evil)
  })

  it("should create a valid ScarletWoman character", () => {
    const character = MinionCharacterFactory.createCharacter(MinionCharacters.ScarletWoman)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("ScarletWoman")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Evil)
  })

  it("should create a valid Spy character", () => {
    const character = MinionCharacterFactory.createCharacter(MinionCharacters.Spy)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Spy")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Evil)
  })

  it("should throw an error if an invalid character is passed in", () => {
    expect(() => MinionCharacterFactory.createCharacter("Invalid Character" as MinionCharacters)).toThrowError(
      "Invalid character: Invalid Character"
    )
  })
})
