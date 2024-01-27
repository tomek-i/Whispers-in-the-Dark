import { Role } from "@/lib/game/characters"
import { TownsfolkCharacterFactory, TownsfolkCharacters } from "@/lib/game/factories"

describe("TownsfolkCharacterFactory", () => {
  it("should create a valid Washerwoman character", () => {
    const character = TownsfolkCharacterFactory.createCharacter(TownsfolkCharacters.Washerwoman)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Washerwoman")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Librarian character", () => {
    const character = TownsfolkCharacterFactory.createCharacter(TownsfolkCharacters.Librarian)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Librarian")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Empath character", () => {
    const character = TownsfolkCharacterFactory.createCharacter(TownsfolkCharacters.Empath)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Empath")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Fortune Teller character", () => {
    const character = TownsfolkCharacterFactory.createCharacter(TownsfolkCharacters.FortuneTeller)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("FortuneTeller")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Chef character", () => {
    const character = TownsfolkCharacterFactory.createCharacter(TownsfolkCharacters.Chef)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Chef")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Monk character", () => {
    const character = TownsfolkCharacterFactory.createCharacter(TownsfolkCharacters.Monk)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Monk")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Ravenkeeper character", () => {
    const character = TownsfolkCharacterFactory.createCharacter(TownsfolkCharacters.Ravenkeeper)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Ravenkeeper")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Virgin character", () => {
    const character = TownsfolkCharacterFactory.createCharacter(TownsfolkCharacters.Virgin)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Virgin")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Soldier character", () => {
    const character = TownsfolkCharacterFactory.createCharacter(TownsfolkCharacters.Soldier)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Soldier")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Mayor character", () => {
    const character = TownsfolkCharacterFactory.createCharacter(TownsfolkCharacters.Mayor)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Mayor")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Investigator character", () => {
    const character = TownsfolkCharacterFactory.createCharacter(TownsfolkCharacters.Investigator)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Investigator")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Undertaker character", () => {
    const character = TownsfolkCharacterFactory.createCharacter(TownsfolkCharacters.Undertaker)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Undertaker")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Slayer character", () => {
    const character = TownsfolkCharacterFactory.createCharacter(TownsfolkCharacters.Slayer)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Slayer")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should throw an error if an invalid character is passed in", () => {
    expect(() => TownsfolkCharacterFactory.createCharacter("Invalid Character" as TownsfolkCharacters)).toThrowError(
      "Invalid character: Invalid Character"
    )
  })
})
