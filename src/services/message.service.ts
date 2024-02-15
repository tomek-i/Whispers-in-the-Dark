import { User } from "firebase/auth"
import { post } from "../lib/http"

/**
 * EventData is a generic type that represents the data that is sent with an event message.
 */
export type EventData<T> = {
  data: T
}
/**
 * EventMessage is a generic type that represents the Event message that is sent.
 */
export type EventMessage<T> = {
  sender: User | null
  event: string
  channel: string
} & EventData<T>

//TODO: can we grab it directly from firebase/auth or from the auth context?
let currentSender: User | null = null

/**
 *  Send a message to the server
 * @param message  The message to send
 * @param event  The event to send
 * @param channel  The channel to send
 * @returns Promise<uknown>
 * //TODO: should perhaps not return anything??
 */
const send = <T>(message: EventData<T>, event: string, channel: string) =>
  post("/api/messages", { ...message, event, channel, sender: currentSender })

/**
 * Send a global (chat) message to the server
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
  setSender: (user: User) => {
    currentSender = user
  },
  send,
  sendMessage,
}
