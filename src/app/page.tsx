"use client"
// import { Metadata } from "next"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { GameTitle } from "@/components/GameTitle"
import { LoginForm } from "@/components/LoginForm"
import { MainNavigaion } from "@/components/MainNavigaion"
import { Overlay } from "@/components/Overlay"
import { RegistrationForm } from "@/components/RegistrationForm"

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
  const router = useRouter()
  // useFirebaseMessaging()
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [showRegistrationForm, setRegistrationForm] = useState(false)

  const handleOnLoginClick = () => {
    setRegistrationForm(false)
    setShowLoginForm(true)
  }
  const handleOnSignupClick = () => {
    setShowLoginForm(false)
    setRegistrationForm(true)
  }
  return (
    <>
      <div className="flex w-full justify-end space-x-4">
        <button
          onClick={handleOnLoginClick}
          className="rounded bg-slate-100 px-4 py-2 text-gray-900 hover:text-primary-600"
        >
          Login
        </button>
        <button
          onClick={handleOnSignupClick}
          className="rounded bg-primary-600 px-4 py-2 text-white hover:bg-primary-500 "
        >
          Sign up for free
        </button>
      </div>

      <section>
        <div className="mx-auto max-w-screen-xl text-center">
          <div className="mx-auto flex flex-col items-center place-self-center text-center align-middle">
            <GameTitle />
            {(showRegistrationForm || showLoginForm) && <Overlay />}
            {showLoginForm && (
              <LoginForm
                onSuccess={() => {
                  console.log("login success")
                  //TODO: should we set here the user in the context?
                  router.push("/dashboard")
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
