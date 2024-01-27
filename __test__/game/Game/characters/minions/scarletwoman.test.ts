import { Game } from "@/lib/game/Game"
import { ScarletWoman } from "@/lib/game/characters/minions"

describe("Scarlet Woman", () => {
  const anyGame = new Game(null as any)
  let scarletWoman: ScarletWoman

  beforeEach(() => {
    scarletWoman = new ScarletWoman(anyGame)
  })

  it("should be able to use their ability on the first night", () => {
    expect(scarletWoman.CanUseAbility()).toBe(true)
  })
})
