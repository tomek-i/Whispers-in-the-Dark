import Pusher from "pusher"
import { env as client } from "@/env/client.env"
import { env as server } from "@/env/server.env"

export const pusher = new Pusher({
  appId: client.NEXT_PUBLIC_PUSHER_APP_ID,
  key: client.NEXT_PUBLIC_PUSHER_APP_KEY,
  cluster: client.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
  secret: server.PUSHER_APP_SECRET,
  // useTLS: true,
})
