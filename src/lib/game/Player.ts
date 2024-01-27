import { Character } from "./characters"

export class Player {
  Character: Character | null = null
  character: Character | undefined

  constructor(public name: string) {}
}
