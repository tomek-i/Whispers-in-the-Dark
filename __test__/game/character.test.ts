import { Character } from "@/lib/game/characters"
import { CharacterType, States } from "@/lib/game/enums"
import { Ability } from "@/lib/game/types"

describe("Any Character", () => {
  let character: Character

  beforeEach(() => {
    character = new Character(null as unknown as CharacterType, {} as unknown as Ability)
  })

  it("should have an ability by default", () => {
    expect(character.ability).toBeDefined()
  })

  it("should have a name  by default", () => {
    expect(character.name).toBeDefined()
  })

  it("should be alive by default", () => {
    expect(character.IsAlive()).toBe(true)
  })

  it("should be able to vote by default", () => {
    expect(character.CanVote()).toBe(true)
  })

  it("should not be drunk by default", () => {
    expect(character.IsDrunk()).toBe(false)
  })

  it("should not be poisoned by default", () => {
    expect(character.IsPoisoned()).toBe(false)
  })

  it("should be able to use their ability by default", () => {
    expect(character.CanUseAbility()).toBe(true)
  })

  it("should be able to vote when dead", () => {
    character.Die()
    expect(character.CanVote()).toBe(true)
  })

  it("should be able to vote many times when alive", () => {
    character.Vote()
    character.Vote()
    character.Vote()
    character.Vote()
    character.Vote()
    character.Vote()
    expect(character.CanVote()).toBe(true)
  })

  it("should not be able to vote when dead and already voted", () => {
    character.Die()
    character.Vote()
    expect(character.CanVote()).toBe(false)
  })

  it("should not be able to use their ability when poisoned", () => {
    character.ApplyState(States.Poisoned)
    expect(character.CanUseAbility()).toBe(false)
  })
  it("should not be able to use their ability when drunk", () => {
    character.ApplyState(States.Drunk)
    expect(character.CanUseAbility()).toBe(false)
  })

  it("should be poisoned when applying poison state", () => {
    character.ApplyState(States.Poisoned)
    expect(character.IsPoisoned()).toBe(true)
  })
  it("should be drunk when applying drunk state", () => {
    character.ApplyState(States.Drunk)
    expect(character.IsDrunk()).toBe(true)
  })
  it("should be dead when applying dead state", () => {
    character.ApplyState(States.Dead)
    expect(character.IsAlive()).toBe(false)
  })
  it("should be alive when applying default state", () => {
    character.ApplyState(States.Default)
    expect(character.IsAlive()).toBe(true)
  })

  it("should be poisoned when poisoned", () => {
    character.ApplyPoison()
    expect(character.IsPoisoned()).toBe(true)
  })
  it("should be drunk when drunk", () => {
    character.ApplyDrunk()
    expect(character.IsDrunk()).toBe(true)
  })
  it("should be dead when dies", () => {
    character.Die()
    expect(character.IsAlive()).toBe(false)
  })
  it("should be alive when revived", () => {
    character.Die()
    character.Revive()
    expect(character.IsAlive()).toBe(true)
  })

  describe("is poisoned or drunk", () => {
    it("should return true when poisoined", () => {
      character.ApplyPoison()
      expect(character.IsPoisonedOrDrunk()).toBe(true)
    })
    it("should return true when drunk", () => {
      character.ApplyDrunk()
      expect(character.IsPoisonedOrDrunk()).toBe(true)
    })
    it("should return false by default", () => {
      expect(character.IsPoisonedOrDrunk()).toBe(false)
    })
    it("should return false when character is dead but not poisoned/drunk", () => {
      character.Die()
      expect(character.IsPoisonedOrDrunk()).toBe(false)
    })
  })
})
