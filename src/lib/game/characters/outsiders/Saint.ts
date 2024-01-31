import { Outsider } from "./Outsider"
import { Game } from "../../Game"

export class Saint extends Outsider {
  constructor(public readonly game: Game) {
    super({
      Use: (_) => null,
      description: "If you die by execution, your team loses",
    })
  }
}
