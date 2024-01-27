import { Character } from "../characters"
import {
  CharacterFactory,
  DemonCharacters,
  MinionCharacters,
  OutsiderCharacters,
  TownsfolkCharacters,
} from "../factories"

export enum GameMode {
  TroubleBrewing = "Trouble Brewing",
  Custom = "Custom",
}

export type GameModeCharacterMap = Record<GameMode, Character[]>

export const GetCharactersForGameMode = (gameMode: GameMode): Character[] => {
  return gameModeCharacterMap[gameMode]
}
export const gameModeCharacterMap: GameModeCharacterMap = {
  [GameMode.TroubleBrewing]: CharacterFactory.createCharacters([
    TownsfolkCharacters.Washerwoman,
    TownsfolkCharacters.Librarian,
    TownsfolkCharacters.Investigator,
    TownsfolkCharacters.Chef,
    TownsfolkCharacters.Empath,
    TownsfolkCharacters.FortuneTeller,
    TownsfolkCharacters.Undertaker,
    TownsfolkCharacters.Monk,
    TownsfolkCharacters.Ravenkeeper,
    TownsfolkCharacters.Virgin,
    TownsfolkCharacters.Slayer,
    TownsfolkCharacters.Soldier,
    TownsfolkCharacters.Mayor,
    OutsiderCharacters.Butler,
    OutsiderCharacters.Drunk,
    OutsiderCharacters.Recluse,
    OutsiderCharacters.Saint,
    MinionCharacters.Baron,
    MinionCharacters.Poisoner,
    MinionCharacters.ScarletWoman,
    MinionCharacters.Spy,
    DemonCharacters.Imp,
  ]),
  [GameMode.Custom]: [], // in custom game mode the user adds manually the characters to this array
}
