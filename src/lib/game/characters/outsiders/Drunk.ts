import { Game } from "../../Game"
import { Outsider } from "./Outsider"

export class Drunk extends Outsider {
  //TODO: need to check how this works, do they get told they are a specific townsfolk character that was not in play?
  constructor(public readonly game: Game) {
    super({
      Use: (_) => null,
      description: "You do not know you are the Drunk. You think you are a Townsfolk character, but you are not",
    })
  }
}
