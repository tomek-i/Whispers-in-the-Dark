import { Game } from "../../Game"
import { Outsider } from "./Outsider"

export class Saint extends Outsider {
  constructor(public readonly game: Game) {
    super({
      Use: (_) => null,
      description: "If you die by execution, your team loses",
    })
  }
}
