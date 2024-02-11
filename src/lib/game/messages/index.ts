import { MessageService } from "@/lib/message.service"
import { Player } from "../Player"

export type PlayerJoinedEventData = {
  gameId: string
  player: Player
}
//NOTE: in this case the current player joined
//      the data is the user ID (or perhaps the user object)
//      which is the same as the sender
//      and then of course the game id
const playerJoined = (gameId: string, player: Player) =>
  MessageService.send<PlayerJoinedEventData>(
    {
      data: { gameId, player },
    },
    "player-joined",
    gameId
  )

export const GameMessagingService = {
  playerJoined,
}
