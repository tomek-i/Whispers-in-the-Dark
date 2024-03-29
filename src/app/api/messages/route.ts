import { NextRequest } from "next/server"
import { PlayerJoinedEventData } from "@/lib/game/messages"
import { pusher } from "@/lib/pusher"
import { EventMessage } from "@/services/message.service"

export async function POST(request: NextRequest) {
  //TODO: this seems to be recieved twice
  const eventMessage = (await request.json()) as EventMessage<any>

  //TODO: extract the event message to a class or something
  console.log("EVENT DATA RECIEVED:", { eventMessage })

  if (eventMessage.event === "player-joined") {
    //TODO: for some reason sender is null need to fix this up
    const { channel, data, event } = eventMessage as unknown as EventMessage<PlayerJoinedEventData>
    //TODO: need to fix up the channel name on player-joined message
    await pusher.trigger("game-" + channel, event, data.player.user.displayName + " has joined the game")
  }

  //TODO: the channel "whsipers-in-the-dark" should be dynamic based on the gameId eg. game-123
  //TODO: the event "message" should be replaced by the event passed in the request
  //TODO: the data that is sent depends what event is being triggered
  //      eg. event could be DEMON_KILLED_PLAYER -> Player A who is the Demon KILLED Player B
  //      in that case we want to send a message to all users in the game
  //      but in the case of the DEMON_DIED we want to send a message to the player who is the
  //      SCARLET WOMAN only - so in that case we could use the message event SCARLET_WOMAN this way
  //      only the scarlet woman would be notified
  //NOTE: based on the userId we can send a message back to the sender
  //NOTE: based on the gameId we can send a message to all users in the game
  // await pusher.trigger("whsipers-in-the-dark", "message", "Response as JSON: " + JSON.stringify(data))

  //TODO: fixup response
  return Response.json({ status: 204 })
}

// function OK(data: any) {
//   return new Response(JSON.stringify({ error: null, data }), {
//     headers: { "Content-Type": "application/json" },
//     status: 200,
//   })
// }
