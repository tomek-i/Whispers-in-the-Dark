"use client"

import { signOut } from "firebase/auth"
import { useRouter } from "next/navigation"
import { MainNavigaion } from "@/components/MainNavigaion"
import { AuthContextProvider } from "@/context"
import { firebase } from "@/lib/firebase"

export default function BackendLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthContextProvider>
        <MainNavigaion />
        {children}
      </AuthContextProvider>
    </>
  )
}
