import { Game } from "@/lib/game/Game"
import { Player } from "@/lib/game/Player"
import { Imp } from "@/lib/game/characters/demons"
import { Soldier } from "@/lib/game/characters/townsfolk"
import { States } from "@/lib/game/enums"

describe("A new Player", () => {
  let player: Player

  beforeEach(() => {
    player = new Player("Any Player")
  })

  it("should have a name", () => {
    expect(new Player("Player 1").name).toBe("Player 1")
  })

  it("should not have a character", () => {
    expect(player.character).toBeUndefined()
  })

  it("should be alive", () => {
    expect(player.IsAlive()).toBe(true)
  })

  it("should not be drunk", () => {
    expect(player.IsDrunk()).toBe(false)
  })

  it("should not be poisoned", () => {
    expect(player.IsPoisoned()).toBe(false)
  })

  it("should be able to use their ability", () => {
    expect(player.CanUseAbility()).toBe(true)
  })

  it("should not be poisoned or drunk", () => {
    expect(player.IsPoisonedOrDrunk()).toBe(false)
  })

  it("should be able to vote", () => {
    expect(player.CanVote()).toBe(true)
  })

  it("should be able to vote many times", () => {
    player.Vote()
    player.Vote()
    player.Vote()
    player.Vote()
    player.Vote()
    player.Vote()
    expect(player.CanVote()).toBe(true)
  })

  describe("when applying a state", () => {
    it("should be poisoned", () => {
      player.ApplyState(States.Poisoned)
      expect(player.IsPoisoned()).toBe(true)
    })

    it("should be drunk", () => {
      player.ApplyState(States.Drunk)
      expect(player.IsDrunk()).toBe(true)
    })

    it("should be dead", () => {
      player.ApplyState(States.Dead)
      expect(player.IsAlive()).toBe(false)
    })

    it("should be alive", () => {
      player.ApplyState(States.Default)
      expect(player.IsAlive()).toBe(true)
    })
  })

  describe("when dead", () => {
    beforeEach(() => {
      player.Die()
    })
    it("should be able to vote", () => {
      expect(player.CanVote()).toBe(true)
    })
    it("should not be able to vote when already voted", () => {
      player.Vote()
      expect(player.CanVote()).toBe(false)
    })
    it("should not be able to use their ability", () => {
      player.Die()
      expect(player.CanUseAbility()).toBe(false)
    })
    it("should be dead", () => {
      expect(player.IsAlive()).toBe(false)
    })
    it("should be alive when revived", () => {
      player.Revive()
      expect(player.IsAlive()).toBe(true)
    })
  })

  describe("when drunk", () => {
    beforeEach(() => {
      player.ApplyDrunk()
    })
    it("should be able to vote", () => {
      expect(player.CanVote()).toBe(true)
    })
    it("should be able to vote many times", () => {
      player.Vote()
      player.Vote()
      player.Vote()
      player.Vote()
      player.Vote()
      player.Vote()
      expect(player.CanVote()).toBe(true)
    })
    it("should not be able to use their ability", () => {
      expect(player.CanUseAbility()).toBe(false)
    })
    it("should be drunk", () => {
      expect(player.IsDrunk()).toBe(true)
    })
    it("should be drunk or poisoned", () => {
      expect(player.IsPoisonedOrDrunk()).toBe(true)
    })
  })

  describe("when poisoned", () => {
    beforeEach(() => {
      player.ApplyPoison()
    })
    it("should be able to vote", () => {
      expect(player.CanVote()).toBe(true)
    })
    it("should be able to vote many times", () => {
      player.Vote()
      player.Vote()
      player.Vote()
      player.Vote()
      player.Vote()
      player.Vote()
      expect(player.CanVote()).toBe(true)
    })
    it("should not be able to use their ability", () => {
      expect(player.CanUseAbility()).toBe(false)
    })
    it("should be poisoned", () => {
      expect(player.IsPoisoned()).toBe(true)
    })
    it("should be poisoned or drunk", () => {
      expect(player.IsPoisonedOrDrunk()).toBe(true)
    })
  })

  describe("as an Imp", () => {
    let anyGame: Game
    beforeEach(() => {
      anyGame = new Game(null as any)
      player.character = new Imp(anyGame)
    })
    it("can not use their ability on the first night", () => {
      expect(player.CanUseAbility()).toBe(false)
    })
    it("can use their ability on any other night", () => {
      anyGame.sleep()
      expect(player.CanUseAbility()).toBe(true)
    })

    describe("when using their ability", () => {
      it("should set the target player to dead", () => {
        anyGame.sleep()
        const target = new Player("Target")
        player.UseAbility(target)
        expect(target.IsAlive()).toBe(false)
      })
      it("should not work first night", () => {
        const target = new Player("Target")
        target.character = new Soldier(anyGame)
        player.UseAbility(target)
        expect(target.IsAlive()).toBe(true)
      })
      it("should not work on Soldier", () => {
        anyGame.sleep()
        const target = new Player("Target")
        target.character = new Soldier(anyGame)
        player.UseAbility(target)
        expect(target.IsAlive()).toBe(true)
      })
      it("should not work when drunk", () => {
        anyGame.sleep()
        const target = new Player("Target")
        player.ApplyDrunk()
        player.UseAbility(target)
        expect(target.IsAlive()).toBe(true)
      })
      it("should not work when poisoned", () => {
        anyGame.sleep()
        const target = new Player("Target")
        player.ApplyDrunk()
        player.UseAbility(target)
        expect(target.IsAlive()).toBe(true)
      })
      it("should not work when dead", () => {
        anyGame.sleep()
        const target = new Player("Target")
        player.Die()
        player.UseAbility(target)
        expect(target.IsAlive()).toBe(true)
      })
    })
  })
})
