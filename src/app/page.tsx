"use client"
import { getToken, onMessage } from "firebase/messaging"
import { Metadata } from "next"
import Image from "next/legacy/image"
import Pusher from "pusher-js"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { Button } from "@/components/Button/Button"
import { MainNavigaion } from "@/components/MainNavigaion"
import "react-toastify/dist/ReactToastify.css"
import { env } from "@/env/client.env"
import { useFirebaseMessaging } from "@/hooks"
import { firebase } from "@/lib/firebase"

import { Messaging } from "@/lib/game/messages"

// export const metadata: Metadata = {
//   title: "Whispers in the Dark - Tomek Iwainski",
//   twitter: {
//     card: "summary_large_image",
//   },
//   openGraph: {
//     url: "https://github.com/tomek-i/whispers-in-the-dark/",
//     images: [
//       {
//         width: 2000,
//         height: 1120,
//         url: "https://github.com/tomek-i/whispers-in-the-dark/main/.github/assets/project-logo.jpg",
//       },
//     ],
//   },
// }

export default function Web() {
  useFirebaseMessaging()

  //TODO: create a hook which returns the pusher instance but also pre-defined channels and or triggers eg. new player joined
  const [messages, setMessages] = useState<any>([])
  const [newMessage, setNewMessage] = useState("")
  const [ps, setPs] = useState<Pusher>()

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      // Send the message to Pusher
      // Clear the input field

      Messaging.message(newMessage)
      setNewMessage("")
    }
  }
  useEffect(() => {
    const pusher = new Pusher(env.NEXT_PUBLIC_PUSHER_APP_KEY, {
      cluster: env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
    })
    setPs(pusher)
    const channel = pusher.subscribe("whsipers-in-the-dark")

    channel.bind("message", (data: any) => {
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
  }, [])

  return (
    <>
      <ToastContainer />
      <MainNavigaion />
      <div className="messages">
        {messages.map((message: any, index: number) => (
          <pre key={index}>{JSON.stringify(message)}</pre>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          className="text-black"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Enter your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      <section className="">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto flex flex-col items-center place-self-center text-center align-middle">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Whispers in the Dark
            </h1>
            <Image src="/whispers-in-the-dark.jpg" width={640 / 2} height={832 / 2} alt="Whispers in the Dark logo" />

            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Are you interested in helping and contributing to this project?
            </p>

            <Button href="https://github.com/tomek-i/whispers-in-the-dark" className="mr-3">
              Get started
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
