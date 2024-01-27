import { Player } from "@/lib/game/Player"

describe("Player", () => {
  it("should create a new player with a name", () => {
    // Arrange
    let player = null
    // Act
    player = new Player("Player 1")
    // Assert
    expect(player.name).toBe("Player 1")
  })

  it("should create a new player without a character", () => {
    // Arrange
    let player = null
    // Act
    player = new Player("Player 1")
    // Assert
    expect(player.character).toBeNull()
  })
})
