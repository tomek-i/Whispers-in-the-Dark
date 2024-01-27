import { Character } from "@/lib/game/characters"
import { Ability } from "@/lib/game/types"

describe("Any Character", () => {
  let character: Character

  beforeEach(() => {
    character = new Character(null as any, {} as Ability)
  })

  it("should have an ability by default", () => {
    expect(character.ability).toBeDefined()
  })
})
