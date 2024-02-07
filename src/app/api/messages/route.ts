import { NextRequest } from "next/server"
import { GameEventMessage } from "@/lib/game/messages"
import { pusher } from "@/lib/pusher"

export async function POST(request: NextRequest) {
  const { data, event } = (await request.json()) as GameEventMessage

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
  await pusher.trigger("whsipers-in-the-dark", "message", "Response as JSON: " + JSON.stringify(data))

  //TODO: fixup response
  return Response.json({ status: 200, ok: true, data: "Message sent!", message: data })
}

function OK(data: any) {
  return new Response(JSON.stringify({ error: null, data }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  })
}
// function Created(data: any) {
//   return new Response(JSON.stringify({ error: null, data }), {
//     headers: { "Content-Type": "application/json" },
//     status: 201,
//   })
// }
function NoContent(data: any) {
  return new Response("", {
    headers: { "Content-Type": "application/json" },
    status: 204,
  })
}
