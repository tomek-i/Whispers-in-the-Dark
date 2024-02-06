"use client"
import { useAuthContext } from "@/context"
import { env } from "@/env/client.env"
import { firebase } from "@/lib/firebase"
import { getMessaging, getToken, onMessage } from "firebase/messaging"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

export const useFirebaseMessaging = () => {
  // const { user } = useAuthContext() // get the user from your UserContext
  const [token, setToken] = useState<string>()

  useEffect(
    () => {
      async function getTokenAndPermission() {
        if (typeof window === "undefined" /*|| !user*/) return
        firebase.messaging = getMessaging(firebase.app)

        const permission = await Notification.requestPermission()
        if (permission === "granted") {
          console.log("Notification permission granted.")
          const token = await getToken(firebase.messaging, {
            vapidKey: env.NEXT_PUBLIC_FIREBASE_MESSAGING_VAPID_KEY,
          })
          //TODO: send token to server
          if (token) {
            setToken(token)
            console.log({ token })
            // send the token to your backend here
          } else {
            console.log("No registration token available. Request permission to generate one.")
          }
        }
      }
      getTokenAndPermission()
    },
    [
      /*user*/
      // re-run when user changes
    ]
  )

  useEffect(() => {
    if (typeof window === "undefined" || !firebase.messaging) return

    onMessage(firebase.messaging, (message) => {
      // handle the message payload here
      toast(message.notification?.body)
      console.log({ message })
    })
  }, [firebase.messaging])
}
