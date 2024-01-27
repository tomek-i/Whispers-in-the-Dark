import { Character, Role } from "@/lib/game/characters"
import { Washerwoman } from "@/lib/game/characters/townsfolk"

describe("Washerwoman", () => {
  let character: Character

  beforeAll(() => {
    character = new Washerwoman()
  })

  it("should be a good character", () => {
    expect(character.role).toBe(Role.Good)
  })

  it("should have a name", () => {
    expect(character.name).toBe("Washerwoman")
  })

  it("should be alive by default", () => {
    expect(character.IsAlive()).toBe(true)
  })

  it("should be able to vote", () => {
    expect(character.CanVote()).toBe(true)
  })

  it("should not be drunk by default", () => {
    expect(character.IsDrunk()).toBe(false)
  })

  it("should not be poisoned by default", () => {
    expect(character.IsPoisoned()).toBe(false)
  })

  it("should be able to use ability", () => {
    expect(character.CanUseAbility()).toBe(true)
  })
})
