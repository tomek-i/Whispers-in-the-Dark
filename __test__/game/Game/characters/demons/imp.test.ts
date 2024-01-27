import { Game } from "@/lib/game/Game"
import { Player } from "@/lib/game/Player"
import { Imp } from "@/lib/game/characters/demons"
import { Soldier } from "@/lib/game/characters/townsfolk"

describe("Imp", () => {
  let anyGame: Game
  let imp: Imp
  beforeEach(() => {
    anyGame = new Game(null as any)
    imp = new Imp(anyGame)
  })

  describe("on first night", () => {
    it("should not be able to use ability", () => {
      expect(imp.CanUseAbility()).toBe(false)
    })
  })

  describe("on any other night", () => {
    beforeEach(() => {
      anyGame.sleep()
    })
    it("should be able to use their ability", () => {
      expect(imp.CanUseAbility()).toBe(true)
    })

    it("ability should not work on the Soldier", () => {
      const target = new Player("Target")
      target.character = new Soldier(anyGame)
      imp.ability.Use(target)
      expect(target.IsAlive()).toBe(true)
    })
  })
})
