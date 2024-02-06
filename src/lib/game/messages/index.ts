import { post } from "@/lib/http"

export enum GameEvent {
  PlayerJoined = "player-joined", //  a new player joined via a game id
  PlayerLeftGame = "player-left", // player left / disconnected
  PlayerDied = "player-died", // player died

  PlayerVoted = "player-voted", // current player voted for the nominated player to be executed
  PlayerNominated = "player-nominated", // player a nominated player b for execution with reason (perhaps can record voice and use AI to generate audio to text, for the AI story telling)

  PlayerStatusEffect = "player-status-effect", // player got a status effect eg poisoned or drunk or back to normal
  Message = "message", // a general message was sent by a player
  DemonDied = "demon-died",
  MinionDied = "minion-died",
  OutsiderDied = "outsider-died",
  TownsfolkDied = "townsfolk-died",
  GameStarted = "game-started",
  GameEnded = "game-ended", // game over
  GameCreated = "game-created", // new game was created by game master, all player's logged in will be notified and or invited? perhaps there can be a friendlist in case this goes public you dont want to invite EVERY single person
  GameUpdated = "game-updated",
}

type EventMessage<T> = {
  data: T
}

type GameEventData = Record<string, any> & {
  gameId?: string | null
  sender: string
}

export type GameEventMessage = EventMessage<GameEventData> & {
  event: string //the event to trigger on the Pusher channel
}

// const x:GameEventMessage = {
//     event: "message",
//     data:{
//         gameId: "game-213",
//         userId: "111",
//         message: "hello"
//     }
// }
const url = "/api/messages"

const currentUser = "111" //TODO: this is set when the user logs in

const send = (message: GameEventMessage) => post(url, message)

const message = (message: string) => {
  send({
    data: { gameId: "game-213", sender: currentUser, message },
    event: GameEvent.Message,
  })
}

//NOTE: in this case the current player joined
//      the data is the user ID (or perhaps the user object)
//      which is the same as the sender
//      and then of course the game id
const playerJoined = (gameId: string) => {
  send({
    data: { gameId, sender: currentUser },
    event: GameEvent.PlayerJoined,
  })
}

//TODO: need to be able to set the gameId when the user joins a game
//TODO: need to set the user ID when the user logs in
export const Messaging = {
  message,
  playerJoined,
}
