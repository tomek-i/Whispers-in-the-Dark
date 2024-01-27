import { Role } from "@/lib/game/enums"
import { TownsfolkCharacterFactory, TownsfolkCharacters } from "@/lib/game/factories"

describe("TownsfolkCharacterFactory", () => {
  let factory: TownsfolkCharacterFactory

  beforeAll(() => {
    factory = new TownsfolkCharacterFactory()
  })
  it("should create a valid Washerwoman character", () => {
    const character = factory.createCharacter(TownsfolkCharacters.Washerwoman)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Washerwoman")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Librarian character", () => {
    const character = factory.createCharacter(TownsfolkCharacters.Librarian)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Librarian")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Empath character", () => {
    const character = factory.createCharacter(TownsfolkCharacters.Empath)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Empath")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Fortune Teller character", () => {
    const character = factory.createCharacter(TownsfolkCharacters.FortuneTeller)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("FortuneTeller")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Chef character", () => {
    const character = factory.createCharacter(TownsfolkCharacters.Chef)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Chef")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Monk character", () => {
    const character = factory.createCharacter(TownsfolkCharacters.Monk)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Monk")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Ravenkeeper character", () => {
    const character = factory.createCharacter(TownsfolkCharacters.Ravenkeeper)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Ravenkeeper")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Virgin character", () => {
    const character = factory.createCharacter(TownsfolkCharacters.Virgin)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Virgin")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Soldier character", () => {
    const character = factory.createCharacter(TownsfolkCharacters.Soldier)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Soldier")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Mayor character", () => {
    const character = factory.createCharacter(TownsfolkCharacters.Mayor)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Mayor")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Investigator character", () => {
    const character = factory.createCharacter(TownsfolkCharacters.Investigator)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Investigator")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Undertaker character", () => {
    const character = factory.createCharacter(TownsfolkCharacters.Undertaker)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Undertaker")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should create a valid Slayer character", () => {
    const character = factory.createCharacter(TownsfolkCharacters.Slayer)

    expect(character).toBeDefined()
    expect(character.name).toBeDefined()
    expect(character.name).toBe("Slayer")
    expect(character.role).toBeDefined()
    expect(character.role).toBe(Role.Good)
  })

  it("should throw an error if an invalid character is passed in", () => {
    expect(() => factory.createCharacter("Invalid Character" as TownsfolkCharacters)).toThrowError(
      "Invalid character: Invalid Character"
    )
  })
})
