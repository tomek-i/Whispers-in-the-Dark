"use client"
import { getToken, onMessage } from "firebase/messaging"
import { Metadata } from "next"
import Image from "next/legacy/image"
import { useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"
import { Button } from "@/components/Button/Button"
import { MainNavigaion } from "@/components/MainNavigaion"
import "react-toastify/dist/ReactToastify.css"
import { env } from "@/env/client.env"
import { firebase } from "@/lib/firebase"

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
  // onMessage(messaging, (payload) => {
  //   toast(payload.notification)
  // })

  const onMessageListener = () =>
    new Promise((resolve) => {
      onMessage(firebase.messaging, (payload) => {
        console.log("payload", payload)
        resolve(payload)
      })
    })

  onMessageListener().then((payload) => {
    console.log({ payload })
  })
  async function requestPermission() {
    //requesting permission using Notification API
    const permission = await Notification.requestPermission()

    if (permission === "granted") {
      const token = await getToken(firebase.messaging, {
        vapidKey: env.NEXT_PUBLIC_FIREBASE_MESSAGING_VAPID_KEY,
      })

      //We can send token to server
      console.log("Token generated : ", token)
    } else if (permission === "denied") {
      //notifications are blocked
      alert("You denied for the notification")
    }
  }

  useEffect(() => {
    requestPermission()
  }, [])

  const notify = () => toast("Wow so easy!")
  return (
    <>
      <MainNavigaion />
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
            <button onClick={notify}>Notify!</button>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  )
}
