import { Game } from "./Game"
import { Character } from "./characters"
import { States } from "./enums"

export class Player {
  #character?: Character
  #votes: boolean = true
  #state: States = States.Default
  game!: Game
  constructor(public name: string) {}

  get character() {
    return this.#character!
  }

  set character(character: Character) {
    this.#character = character
    this.#character.player = this
  }

  IsAlive(): boolean {
    return this.#state !== States.Dead
  }
  UseAbility(target: Player) {
    if (this.CanUseAbility()) this.#character?.ability.Use(target)
  }
  ApplyState(state: States) {
    this.#state = state
  }

  CanUseAbility(): boolean {
    return this.IsAlive() && !this.IsPoisonedOrDrunk() && (this.#character?.CanUseAbility() ?? true)
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

  Vote() {
    //NOTE: this is a hack to allow dead characters to vote
    this.#votes = false
  }
  //TODO: maybe need to implement Die when demon kills the character and Execute when townsfolk kills the character
  Die() {
    this.ApplyState(States.Dead)
    this.game?.playerDied(this)
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
