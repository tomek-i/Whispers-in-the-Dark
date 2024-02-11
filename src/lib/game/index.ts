import { Game } from "./Game"
import { GameMode } from "./gameModes"
import { Player } from "./Player"
import { Util } from "../util"

export const createNewGame = (gameMode: GameMode, admin: Player) => {
  const game = new Game(gameMode, admin)
  game.code = Util.createRandomGameId()
  game.GameMaster = admin

  return game
}

export const createTroubleBrewingGame = (admin: Player) => {
  return createNewGame(GameMode.TroubleBrewing, admin)
}
