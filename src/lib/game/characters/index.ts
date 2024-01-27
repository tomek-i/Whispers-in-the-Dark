import { Player } from "../Player"
import { CharacterType, Role } from "../enums"
import { Ability, CharacterRoleMap } from "../types"

export const characterRoleMap: CharacterRoleMap = {
  [CharacterType.Townsfolk]: Role.Good,
  [CharacterType.Outsider]: Role.Good,
  [CharacterType.Minion]: Role.Evil,
  [CharacterType.Demon]: Role.Evil,
  [CharacterType.Traveler]: Role.Default,
}

export class Character {
  readonly #name: string
  readonly #role: Role

  player: Player | null = null

  constructor(
    private readonly _characterType: CharacterType,
    public readonly ability: Ability
  ) {
    this.#name = this.constructor.name
    this.#role = characterRoleMap[this._characterType]
  }

  get role(): Role {
    return this.#role
  }
  get characterType(): CharacterType {
    return this._characterType
  }
  get name(): string {
    return this.#name
  }
  CanUseAbility() {
    return this.player?.CanUseAbility() ?? true
  }
}
