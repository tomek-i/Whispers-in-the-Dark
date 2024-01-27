import { CharacterType, Role, States } from "../enums"
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

  #votes: boolean
  #state: States

  constructor(
    private readonly _characterType: CharacterType,
    public readonly ability: Ability
  ) {
    this.#name = this.constructor.name
    this.#role = characterRoleMap[this._characterType]
    this.#state = States.Default
    this.#votes = true
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

  IsAlive(): boolean {
    return this.#state !== States.Dead
  }

  ApplyState(state: States) {
    this.#state = state
  }

  CanVote(): boolean {
    return this.IsAlive() || (!this.IsAlive() && this.#votes)
  }

  IsDrunk(): boolean {
    return this.#state === States.Drunk
  }

  IsPoisoned(): boolean {
    return this.#state === States.Poisoned
  }

  CanUseAbility(): boolean {
    return this.IsAlive() && !(this.IsDrunk() || this.IsPoisoned())
  }

  Vote() {
    //NOTE: this is a hack to allow dead characters to vote
    this.#votes = false
  }
  //TODO: maybe need to implement Die when demon kills the character and Execute when townsfolk kills the character
  Die() {
    this.ApplyState(States.Dead)
  }

  ApplyPoison() {
    this.ApplyState(States.Poisoned)
  }

  ApplyDrunk() {
    this.ApplyState(States.Drunk)
  }

  Revive() {
    this.ApplyState(States.Default)
  }
  IsPoisonedOrDrunk(): any {
    return this.IsPoisoned() || this.IsDrunk()
  }
}
