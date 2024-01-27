// import "@testing-library/jest-dom";
import { Game } from "@/lib/game/Game"
import { GameBuilder } from "@/lib/game/GameBuilder"
import { Player } from "@/lib/game/Player"
import { GameMode, GetCharactersForGameMode } from "@/lib/game/gameModes"

describe("Game", () => {
  const anyGameMode = GameMode.TroubleBrewing

  it("should create a new game with a code", () => {
    // Arrange
    let game: Game | null = null
    // Act
    game = new Game(anyGameMode)
    // Assert
    expect(game.code).toBeDefined()
  })

  it("should have a list of characters in play", () => {
    // Arrange
    const players = [
      new Player("Player 1"),
      new Player("Player 2"),
      new Player("Player 3"),
      new Player("Player 4"),
      new Player("Player 5"),
    ]
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
      new Player("Player 1"),
      new Player("Player 2"),
      new Player("Player 3"),
      new Player("Player 4"),
      new Player("Player 5"),
    ]
    const allcharacters = GetCharactersForGameMode(anyGameMode)
    const expectedAmountNotInPlay = allcharacters.length - players.length
    const game = new GameBuilder(anyGameMode).withPlayers(players).assignCharactersToPlayers().build()

    // Act
    const charactersNotInPlay = game.charactersNotInPlay
    // Assert
    expect(charactersNotInPlay).toBeDefined()
    expect(charactersNotInPlay.length).toBe(expectedAmountNotInPlay)
  })

  it("should increment the nights when going to sleep", () => {
    // Arrange
    const game = new Game(anyGameMode)
    // Act
    game.sleep()
    // Assert
    expect(game.night).toBe(2)
  })
})
