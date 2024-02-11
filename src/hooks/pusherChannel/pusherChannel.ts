import Pusher from "pusher-js"
import { useEffect, useState } from "react"
import { env } from "@/env/client.env"

export const usePusherChannel = (channelName: string, event: string) => {
  //TODO: need to find out if its always strings or if there can be other types
  const [messages, setMessages] = useState<any>([])

  useEffect(() => {
    const pusher = new Pusher(env.NEXT_PUBLIC_PUSHER_APP_KEY, {
      cluster: env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
    })
    const channel = pusher.subscribe(channelName)

    channel.bind(event, (data: any) => {
      setMessages((prevMessages: any) => [...prevMessages, data])
    })

    pusher.connection.bind("error", (err: any) => {
      console.error(err)
    })
    pusher.connection.bind("connected", () => {
      console.log("Connected to Pusher")
    })

    return () => {
      pusher.disconnect()
    }
  }, [channelName, event])

  return messages
}
