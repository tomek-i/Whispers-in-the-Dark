export type PlayerAllocation = {
  townsfolk: number
  outsiders: number
  minions: number
  demons: number
}
export type Ability = {
  description: string
}
export type DemonCharacterClassMap = Record<DemonCharacters, new (game: Game) => Demon>
export type MinionCharacterClassMap = Record<MinionCharacters, new (game: Game) => Minion>
export type OutsiderCharacterClassMap = Record<OutsiderCharacters, new (game: Game) => Outsider>
export type TownsfolkCharacterClassMap = Record<TownsfolkCharacters, new (game: Game) => Townsfolk>
// Define a type that includes all character types
export type AllCharacters = TownsfolkCharacters | MinionCharacters | DemonCharacters | OutsiderCharacters

// Define a type that includes all character classes
export type AllCharacterClasses = Townsfolk | Minion | Demon | Outsider // assuming you have a similar class for Outsider

export type CharacterRoleMap = Record<CharacterType, Role>
