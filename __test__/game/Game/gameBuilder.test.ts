import { GameBuilder } from "@/lib/game/GameBuilder"
import { Player } from "@/lib/game/Player"
import { GameMode, GetCharactersForGameMode } from "@/lib/game/gameModes"

describe("GameBuilder", () => {
  it("should create a new game with a code", () => {
    // Arrange
    let game = null
    const anyGameMode = GameMode.TroubleBrewing
    // Act
    game = new GameBuilder(anyGameMode).build()
    // Assert
    expect(game.code).toBeDefined()
  })
  it("should have a list of characters in play", () => {
    // Arrange
    const players = [
      { name: "Player 1" },
      { name: "Player 2" },
      { name: "Player 3" },
      { name: "Player 4" },
      { name: "Player 5" },
    ] as Player[]
    const anyGameMode = GameMode.TroubleBrewing
    const game = new GameBuilder(anyGameMode).withPlayers(players).assignCharactersToPlayers().build()

    // Act
    const charactersInPlay = game.charactersInPlay
    // Assert
    expect(charactersInPlay).toBeDefined()
    expect(charactersInPlay.length).toBe(5)
  })

  it("should have a list of characters not in play", () => {
    // Arrange
    const players = [
      { name: "Player 1" },
      { name: "Player 2" },
      { name: "Player 3" },
      { name: "Player 4" },
      { name: "Player 5" },
    ] as Player[]
    const anyGameMode = GameMode.TroubleBrewing
    const allcharacters = GetCharactersForGameMode(anyGameMode)
    const expectedAmountNotInPlay = allcharacters.length - players.length
    const game = new GameBuilder(anyGameMode).withPlayers(players).assignCharactersToPlayers().build()

    // Act
    const charactersNotInPlay = game.charactersNotInPlay
    // Assert
    expect(charactersNotInPlay).toBeDefined()
    expect(charactersNotInPlay.length).toBe(expectedAmountNotInPlay)
  })
  it("should assign a character to each player", () => {
    // Arrange
    const players = [
      { name: "Player 1" },
      { name: "Player 2" },
      { name: "Player 3" },
      { name: "Player 4" },
      { name: "Player 5" },
    ] as Player[]
    const anyGameMode = GameMode.TroubleBrewing
    const game = new GameBuilder(anyGameMode).withPlayers(players).assignCharactersToPlayers().build()

    // Act
    const charactersFromPlayers = game.players.map((p) => p.character)
    // Assert
    expect(charactersFromPlayers).toBeDefined()
    expect(charactersFromPlayers.length).toBe(players.length)
    expect(charactersFromPlayers).not.toContain(undefined)
    expect(charactersFromPlayers).not.toContain(null)
  })
})
