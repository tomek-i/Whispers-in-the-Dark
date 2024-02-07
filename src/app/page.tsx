"use client"
import { Metadata } from "next"
import { useRouter } from "next/navigation"
import Pusher from "pusher-js"
import { useEffect, useRef, useState } from "react"
import { ToastContainer } from "react-toastify"
import { GameTitle } from "@/components/GameTitle"
import { MainNavigaion } from "@/components/MainNavigaion"
import { Overlay } from "@/components/Overlay"
import { RegistrationForm } from "@/components/RegistrationForm"
import { env } from "@/env/client.env"
import { useFirebaseMessaging } from "@/hooks"
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

  const [showVideo, setShowVideo] = useState(false)
  const [showMessaging, setShowMessaging] = useState(true)
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [showRegistrationForm, setRegistrationForm] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleVideoEnd = () => {
    router.push("/another-page")
  }

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
      <MainNavigaion
        onLoginClick={() => {
          console.log("LoginCLickedd")
          setRegistrationForm(false)
          setShowLoginForm(true)
        }}
        onSignupClick={() => {
          setShowLoginForm(false)
          setRegistrationForm(true)
        }}
      />

      {/* {showMessaging && ( */}
      <>
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
      </>
      {/* )} */}
      <section className="">
        {/* {showVideo && (
          <>
            <video
              ref={videoRef}
              src="ally-enter.mp4"
              onEnded={handleVideoEnd}
              style={{ position: "fixed", right: 0, bottom: 0, minWidth: "100%", minHeight: "100%", zIndex: -100 }}
            />
            <button onClick={handlePlayVideo}>Play Video</button>
          </>
        )} */}

        <div className="mx-auto  max-w-screen-xl text-center">
          <div className="mx-auto flex flex-col items-center place-self-center text-center align-middle">
            <GameTitle />
            {(showRegistrationForm || showLoginForm) && <Overlay />}
            {showRegistrationForm && <RegistrationForm />}
          </div>
        </div>
      </section>
    </>
  )
}
