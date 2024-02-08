"use client"
import { Metadata } from "next"
import { useRouter } from "next/navigation"
import Pusher from "pusher-js"
import { useEffect, useRef, useState } from "react"
import { ToastContainer } from "react-toastify"
import { GameTitle } from "@/components/GameTitle"
import { LoginForm } from "@/components/LoginForm"
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

  const [showMessaging, setShowMessaging] = useState(false)
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [showRegistrationForm, setRegistrationForm] = useState(false)

  const router = useRouter()

  //TODO: create a hook which returns the pusher instance but also pre-defined channels and or triggers eg. new player joined
  const [messages, setMessages] = useState<any>([])
  const [newMessage, setNewMessage] = useState("")
  const [ps, setPs] = useState<Pusher>()
  const [showVideo, setShowVideo] = useState(true)
  const [showVideoOverlay, setShowVideoOverlay] = useState(false)
  const [hideContent, setHideContent] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      // Send the message to Pusher
      // Clear the input field

      Messaging.message(newMessage)
      setNewMessage("")
    }
  }

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleVideoEnd = () => {
    setHideContent(true)

    setTimeout(() => {
      // Navigate to /dashboard after delay
      router.push("/dashboard")
    }, 50) // Delay in milliseconds, adjust as needed
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

  if (hideContent) return <></>

  return (
    <>
      {showVideo && (
        <>
          <div
            className={`fixed inset-0 bg-black opacity-0  ${
              showVideoOverlay ? "animate-fade-in animate-blur-in" : ""
            } transition-all ease-in-out`}
            style={{ zIndex: 19 }}
          ></div>
          <video
            ref={videoRef}
            src="ally-enter.mp4"
            onEnded={handleVideoEnd}
            className="fixed -z-[18]  object-contain"
            style={{ left: "50%", transform: "translateX(-50%)" }}
          />
        </>
      )}

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

      {showMessaging && (
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
      )}
      <section className={`${showVideoOverlay ? "animate-blur-in z-50" : ""}`}>
        <div className="max-w-screen-xl mx-auto text-center">
          <div className="flex flex-col items-center mx-auto text-center align-middle place-self-center">
            {(showRegistrationForm || showLoginForm) && <Overlay />}
            {showLoginForm && (
              <LoginForm
                onFormSubmit={() => {
                  setShowLoginForm(false)
                  setShowVideoOverlay(true)
                  handlePlayVideo()
                }}
              />
            )}
            {showRegistrationForm && <RegistrationForm />}
          </div>
        </div>
      </section>
    </>
  )
}
