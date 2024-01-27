import { Game } from "@/lib/game/Game"
import { Poisoner } from "@/lib/game/characters/minions"

describe("Poisoner", () => {
  const anyGame = new Game(null as any)
  let poisoner: Poisoner

  beforeEach(() => {
    poisoner = new Poisoner(anyGame)
  })

  it("should be able to use their ability on the first night", () => {
    expect(poisoner.CanUseAbility()).toBe(true)
  })
})
