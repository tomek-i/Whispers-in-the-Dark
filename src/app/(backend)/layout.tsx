"use client"

import { signOut } from "firebase/auth"
import { useRouter } from "next/navigation"
import { redirect } from "next/navigation"
import { useLayoutEffect } from "react"
import { MainNavigaion } from "@/components/MainNavigaion"
import { AuthContextProvider, useAuthContext } from "@/context"
import { firebase } from "@/lib/firebase"

//TODO: for protected routes check out  https://nextjs.org/docs/pages/building-your-application/authentication

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
