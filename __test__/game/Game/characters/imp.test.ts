import { Game } from "@/lib/game/Game"
import { Imp } from "@/lib/game/characters/demons"
import { States } from "@/lib/game/enums"

describe("Imp", () => {
  it("should not be able to use their ability on the first night", () => {
    const anyGame = new Game(null as any)
    const imp = new Imp(anyGame)
    expect(imp.CanUseAbility()).toBe(false)
  })
  it("should be able to use their ability after the first night", () => {
    const anyGame = new Game(null as any)
    const imp = new Imp(anyGame)
    anyGame.sleep()
    expect(imp.CanUseAbility()).toBe(true)
  })
  it("should not be able to use their ability after the first night if they are drunk", () => {
    const anyGame = new Game(null as any)
    const imp = new Imp(anyGame)
    anyGame.sleep()
    imp.ApplyState(States.Drunk)
    expect(imp.CanUseAbility()).toBe(false)
  })
  it("should not be able to use their ability after the first night if they are poisoned", () => {
    const anyGame = new Game(null as any)
    const imp = new Imp(anyGame)
    anyGame.sleep()
    imp.ApplyPoison()
    expect(imp.CanUseAbility()).toBe(false)
  })
})
