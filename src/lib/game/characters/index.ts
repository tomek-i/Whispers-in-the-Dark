export enum CharacterType {
  Townsfolk = "Townfolk",
  Outsider = "Outsider",
  Minion = "Minion",
  Demon = "Demon",
  Traveler = "Traveler",
}

export enum States {
  Default,
  Poisoned,
  Drunk,
  Dead,
}
export enum Role {
  Default = "default",
  Good = "good",
  Evil = "evil",
}

export type CharacterRoleMap = Record<CharacterType, Role>

export const characterRoleMap: CharacterRoleMap = {
  [CharacterType.Townsfolk]: Role.Good,
  [CharacterType.Outsider]: Role.Good,
  [CharacterType.Minion]: Role.Evil,
  [CharacterType.Demon]: Role.Evil,
  [CharacterType.Traveler]: Role.Default,
}

// abstract class Character {
//   constructor(
//     public characterType: CharacterType,
//     public state: States,
//     public role: Role
//   ) {}
// }

// class Townsfolk extends Character {
//   constructor(state: States, role: Role) {
//     super(CharacterType.Townsfolk, state, role)
//   }
// }

export class Character {
  readonly #name: string
  readonly #role: Role

  readonly #state: States
  readonly #votes: number

  constructor(private characterType: CharacterType) {
    this.#name = this.constructor.name
    this.#role = characterRoleMap[this.characterType]
    this.#state = States.Default
    this.#votes = 1
  }

  get role(): Role {
    return this.#role
  }
  get name(): string {
    return this.#name
  }

  IsAlive(): boolean {
    return this.#state !== States.Dead
  }

  CanVote(): boolean {
    return this.IsAlive() && this.#votes > 0
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
}
