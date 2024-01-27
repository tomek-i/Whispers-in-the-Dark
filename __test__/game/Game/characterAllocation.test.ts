import { GameUtil } from "@/lib/game/GameUtil"
import { PlayerAllocation } from "@/lib/game/types"

describe("Game's character allocation based on player count", () => {
  it("should throw an exception for less than <5 players", () => {
    // Arrange
    const invalidPlayerCounts = [-1, 0, 1, 2, 3, 4]

    // Act and Assert
    invalidPlayerCounts.forEach((count) => {
      expect(() => GameUtil.getPlayerAllocation(count)).toThrow("Minimum number of players is 5")
    })
  })
  it("should have 3 townsfolk, 0 outsider, 1 minion and 1 demon for 5 players", () => {
    // Arrange
    const amountOfPlayers = 5
    const expectedAllocation: PlayerAllocation = {
      townsfolk: 3,
      outsiders: 0,
      minions: 1,
      demons: 1,
    }
    // Act
    const allocation = GameUtil.getPlayerAllocation(amountOfPlayers)
    // Assert
    expect(allocation).toEqual(expectedAllocation)
  })

  it("should have 3 townsfolk, 1 outsider, 1 minion and 1 demon for 6 players", () => {
    // Arrange
    const amountOfPlayers = 6
    const expectedAllocation: PlayerAllocation = {
      townsfolk: 3,
      outsiders: 1,
      minions: 1,
      demons: 1,
    }
    // Act
    const allocation = GameUtil.getPlayerAllocation(amountOfPlayers)
    // Assert
    expect(allocation).toEqual(expectedAllocation)
  })
  it("should have 5 townsfolk, 0 outsider, 1 minion and 1 demon for 7 players", () => {
    // Arrange
    const amountOfPlayers = 7
    const expectedAllocation: PlayerAllocation = {
      townsfolk: 5,
      outsiders: 0,
      minions: 1,
      demons: 1,
    }
    // Act
    const allocation = GameUtil.getPlayerAllocation(amountOfPlayers)
    // Assert
    expect(allocation).toEqual(expectedAllocation)
  })
  it("should have 5 townsfolk, 1 outsider, 1 minion and 1 demon for 8 players", () => {
    // Arrange
    const amountOfPlayers = 8
    const expectedAllocation: PlayerAllocation = {
      townsfolk: 5,
      outsiders: 1,
      minions: 1,
      demons: 1,
    }
    // Act
    const allocation = GameUtil.getPlayerAllocation(amountOfPlayers)
    // Assert
    expect(allocation).toEqual(expectedAllocation)
  })
  it("should have 5 townsfolk, 2 outsider, 1 minion and 1 demon for 9 players", () => {
    // Arrange
    const amountOfPlayers = 9
    const expectedAllocation: PlayerAllocation = {
      townsfolk: 5,
      outsiders: 2,
      minions: 1,
      demons: 1,
    }
    // Act
    const allocation = GameUtil.getPlayerAllocation(amountOfPlayers)
    // Assert
    expect(allocation).toEqual(expectedAllocation)
  })
  it("should have 7 townsfolk, 0 outsider, 2 minion and 1 demon for 10 players", () => {
    // Arrange
    const amountOfPlayers = 10
    const expectedAllocation: PlayerAllocation = {
      townsfolk: 7,
      outsiders: 0,
      minions: 2,
      demons: 1,
    }
    // Act
    const allocation = GameUtil.getPlayerAllocation(amountOfPlayers)
    // Assert
    expect(allocation).toEqual(expectedAllocation)
  })
  it("should have 7 townsfolk, 1 outsider, 2 minion and 1 demon for 11 players", () => {
    // Arrange
    const amountOfPlayers = 11
    const expectedAllocation: PlayerAllocation = {
      townsfolk: 7,
      outsiders: 1,
      minions: 2,
      demons: 1,
    }
    // Act
    const allocation = GameUtil.getPlayerAllocation(amountOfPlayers)
    // Assert
    expect(allocation).toEqual(expectedAllocation)
  })
  it("should have 7 townsfolk, 2 outsider, 2 minion and 1 demon for 12 players", () => {
    // Arrange
    const amountOfPlayers = 12
    const expectedAllocation: PlayerAllocation = {
      townsfolk: 7,
      outsiders: 2,
      minions: 2,
      demons: 1,
    }
    // Act
    const allocation = GameUtil.getPlayerAllocation(amountOfPlayers)
    // Assert
    expect(allocation).toEqual(expectedAllocation)
  })
  it("should have 9 townsfolk, 0 outsider, 3 minion and 1 demon for 13 players", () => {
    // Arrange
    const amountOfPlayers = 13
    const expectedAllocation: PlayerAllocation = {
      townsfolk: 9,
      outsiders: 0,
      minions: 3,
      demons: 1,
    }
    // Act
    const allocation = GameUtil.getPlayerAllocation(amountOfPlayers)
    // Assert
    expect(allocation).toEqual(expectedAllocation)
  })
  it("should have 9 townsfolk, 1 outsider, 3 minion and 1 demon for 14 players", () => {
    // Arrange
    const amountOfPlayers = 14
    const expectedAllocation: PlayerAllocation = {
      townsfolk: 9,
      outsiders: 1,
      minions: 3,
      demons: 1,
    }
    // Act
    const allocation = GameUtil.getPlayerAllocation(amountOfPlayers)
    // Assert
    expect(allocation).toEqual(expectedAllocation)
  })
  it("should have 9 townsfolk, 2 outsider, 3 minion and 1 demon for 15 players", () => {
    // Arrange
    const amountOfPlayers = 15
    const expectedAllocation: PlayerAllocation = {
      townsfolk: 9,
      outsiders: 2,
      minions: 3,
      demons: 1,
    }
    // Act
    const allocation = GameUtil.getPlayerAllocation(amountOfPlayers)
    // Assert
    expect(allocation).toEqual(expectedAllocation)
  })

  it("should have 9 townsfolk, 2 outsider, 3 minion and 1 demon for +15 players", () => {
    // Arrange
    const amountOfPlayers = 25
    const expectedAllocation: PlayerAllocation = {
      townsfolk: 9,
      outsiders: 2,
      minions: 3,
      demons: 1,
    }

    // Act
    const allocation = GameUtil.getPlayerAllocation(amountOfPlayers)

    // Assert
    expect(allocation).toEqual(expectedAllocation)
  })
})
