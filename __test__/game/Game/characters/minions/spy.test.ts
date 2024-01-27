import { Game } from "@/lib/game/Game"
import { Spy } from "@/lib/game/characters/minions"

describe("Spy", () => {
  const anyGame = new Game(null as any)
  let spy: Spy

  beforeEach(() => {
    spy = new Spy(anyGame)
  })

  it("should be able to use their ability on the first night", () => {
    expect(spy.CanUseAbility()).toBe(true)
  })
})
