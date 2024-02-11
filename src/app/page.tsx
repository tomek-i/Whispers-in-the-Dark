"use client"
import { Metadata } from "next"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"
import { LoginForm } from "@/components/LoginForm"
import { MainNavigaion } from "@/components/MainNavigaion"
import { Overlay } from "@/components/Overlay"
import { RegistrationForm } from "@/components/RegistrationForm"
// import { useFirebaseMessaging } from "@/hooks"
import { usePusherChannel } from "@/hooks/pusherChannel/pusherChannel"
import { MessageService } from "@/lib/message.service"

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
  // useFirebaseMessaging()
  const messages = usePusherChannel("whispers-in-the-dark", "message")
  const [showMessaging, setShowMessaging] = useState(false)
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [showRegistrationForm, setRegistrationForm] = useState(false)

  const router = useRouter()

  //TODO: create a hook which returns the pusher instance but also pre-defined channels and or triggers eg. new player joined
  const [newMessage, setNewMessage] = useState("")
  const [showVideo, setShowVideo] = useState(true)
  const [showVideoOverlay, setShowVideoOverlay] = useState(false)
  const [hideContent, setHideContent] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      // Send the message to Pusher
      // Clear the input field

      MessageService.sendMessage(newMessage)
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

  if (hideContent) return <></>

  return (
    <>
      {showVideo && (
        <>
          <div
            className={`fixed inset-0 bg-black opacity-0  ${
              showVideoOverlay ? "animate-blur-in animate-fade-in" : ""
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
      <section className={`${showVideoOverlay ? "z-50 animate-blur-in" : ""}`}>
        <div className="mx-auto max-w-screen-xl text-center">
          <div className="mx-auto flex flex-col items-center place-self-center text-center align-middle">
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
