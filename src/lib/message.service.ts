import { User } from "firebase/auth"
import { post } from "./http"

export type EventData<T> = {
  data: T
}
export type EventMessage<T> = {
  sender: User | null
  event: string
  channel: string
} & EventData<T>
const url = "/api/messages"

//TODO: can we grab it directly from firebase/auth or from the auth context?
let currentUser: User | null = null

const send = <T>(message: EventData<T>, event: string, channel: string) =>
  post(url, { ...message, event, channel, sender: currentUser })

/**
 * Send a (chat) message to the server
 * @param message
 * @param event default event message
 * @param channel default channel whispers-in-the-dark
 */
const sendMessage = async (message: string, event: string = "message", channel = "whispers-in-the-dark") => {
  await send(
    {
      data: message,
    },
    event,
    channel
  )
}

export const MessageService = {
  setCurrentUser: (user: User) => {
    currentUser = user
  },
  send,
  sendMessage,
}
