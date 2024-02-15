"use client"

import { useRouter } from "next/navigation"
import { useEffect, useLayoutEffect } from "react"
import { MainNavigaion } from "@/components/MainNavigaion"
import { AuthContextProvider, useAuthContext } from "@/context"

//TODO: for protected routes check out  https://nextjs.org/docs/pages/building-your-application/authentication

export default function BackendLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { user, isLoading } = useAuthContext()

  useLayoutEffect(() => {
    console.log({ user, isLoading })
    if (!user && !isLoading) {
      console.log("no user found, redirecting to login")
      router.push("/")
    }
  }, [isLoading, router, user])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <MainNavigaion user={user} />
      {children}
    </>
  )
}
