"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useAuthContext } from "@/context"

export default function DashboardPage() {
  const { user } = useAuthContext()
  const router = useRouter()
  useEffect(() => {
    console.log({ user })
    if (user == null) router.push("/")
  }, [router, user])

  return <> Only logged in users Page Dashboard: {user.email}</>
}
