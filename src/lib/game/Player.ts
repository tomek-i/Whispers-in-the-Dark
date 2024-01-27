import { Character } from "./characters"

export class Player {
  character: Character | null = null
  constructor(public name: string) {}
}
