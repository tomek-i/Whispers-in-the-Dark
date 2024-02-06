import { NextRequest } from "next/server"
import Pusher from "pusher"
import { env as client } from "@/env/client.env"
import { env as server } from "@/env/server.env"

export async function POST(request: NextRequest) {
  const { message } = (await request.json()) as { message: string }
  const cfg = {
    appId: client.NEXT_PUBLIC_PUSHER_APP_ID,
    key: client.NEXT_PUBLIC_PUSHER_APP_KEY,
    cluster: client.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
    secret: server.PUSHER_APP_SECRET,
    // useTLS: true,
  }
  const pusher = new Pusher(cfg)

  //TODO: is there a way to send a message directly to a specific client/user?
  // Trigger the 'message' event on the 'whsipers-in-the-dark' in Pusher
  await pusher.trigger("whsipers-in-the-dark", "message", message)
  return Response.json({ status: 200, ok: true, data: "Message sent!", message })
}
