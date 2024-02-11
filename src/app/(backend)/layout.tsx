"use client"

import { signOut } from "firebase/auth"
import { useRouter } from "next/navigation"
import { MainNavigaion } from "@/components/MainNavigaion"
import { AuthContextProvider } from "@/context"
import { firebase } from "@/lib/firebase"

export default function BackendLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  return (
    <>
      <AuthContextProvider>
        <MainNavigaion />
        {/* <div className="flex justify-end w-full">
          <button
            onClick={() => {
              console.log("Logging out")
              signOut(firebase.auth)
              router.push("/")
            }}
          >
            Logout
          </button>
        </div> */}
        {children}
      </AuthContextProvider>
    </>
  )
}
