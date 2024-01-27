import { Game } from "../../Game"
import { Outsider } from "./Outsider"

export class Saint extends Outsider {
  constructor(public readonly game: Game) {
    super({
      description: "If you die by execution, your team loses",
    })
  }
}
