"use client"
import { useRouter } from "next/navigation"
import { use, useEffect, useRef } from "react"
import { GameTitle } from "@/components/GameTitle"
import { Overlay } from "@/components/Overlay"
import { useAuthContext } from "@/context"
import { post } from "@/lib/http"

export default function DashboardPage() {
  const { user, player } = useAuthContext()
  const router = useRouter()
  useEffect(() => {
    console.log({ player })
    if (user == null) router.push("/")
  }, [router, user])

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center pt-8">
        <div className="mb-auto text-center">
          <GameTitle className="animate-fade-in" />
        </div>
        <div className="flex h-full flex-col items-center justify-center space-y-4">
          <span className="-mt-32 mb-8 text-center">
            Welcome <br /> {user?.email}
          </span>

          {/* TODO: the 3d button effect pushes the content when pressed */}
          <input placeholder="GAME ID" className="w-full p-4 text-black"></input>
          <button className="w-full rounded-sm border-b-4 border-b-green-700 bg-green-400 px-4 py-2 active:border-b-0 ">
            JOIN GAME
          </button>
          <button
            onClick={async () => {
              const gmx = (await post("/api/admin/game", { player })) as any
              console.log({ gmx })
            }}
            className="w-full rounded-sm border-b-4 border-b-red-700 bg-red-400 px-4 py-2 active:border-b-0"
          >
            NEW GAME
          </button>
        </div>
      </div>
    </>
  )
}
