import { Game } from "../../Game"
import { Outsider } from "./Outsider"

export class Butler extends Outsider {
  constructor(public readonly game: Game) {
    super({
      Use: (_) => null,
      description: "Each night, choose a player (not yourself): tomorrow, you may only vote if they are voting too.",
    })
  }
}
