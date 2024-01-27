import { Game } from "../../Game"
import { CharacterType, Role } from "../../enums"
import { Minion } from "./Minion"

export class Spy extends Minion {
  //TODO: need to figure out a way to let the game master override this or perhaps an AI if we can give the AI context of the game progression
  constructor(public readonly game: Game) {
    super({
      //TODO: how to implement this ... unless I sort of use a messaging system
      Use: (_) => null,
      description:
        "Each night, you see the Grimoire. You might register as good & as a Townsfolk or Outsider, even if dead",
    })
  }

  get CharacterType(): CharacterType {
    // if (Math.random() < 0.5) {
    //   // 50% chance to randomize the character type
    //   const characterTypes = [CharacterType.Townsfolk, CharacterType.Outsider]
    //   return characterTypes[Math.floor(Math.random() * characterTypes.length)]!
    // }
    return super.characterType
  }
  get role(): Role {
    // if (Math.random() < 0.5) {
    //   // 50% chance to randomize the role
    //   const roles = Object.values(Role) // Assuming Role is an enum
    //   return roles[Math.floor(Math.random() * roles.length)]!
    // }
    return super.role
  }
}
