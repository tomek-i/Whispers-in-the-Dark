import { Game } from "@/lib/game/Game"
import { Baron } from "@/lib/game/characters/minions"

describe("Baron", () => {
  const anyGame = new Game(null as any)
  let baron: Baron

  beforeEach(() => {
    baron = new Baron(anyGame)
  })

  it("should be able to use their ability on the first night", () => {
    expect(baron.CanUseAbility()).toBe(true)
  })
})
