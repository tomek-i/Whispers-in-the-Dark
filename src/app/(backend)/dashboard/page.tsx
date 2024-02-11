"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { GameTitle } from "@/components/GameTitle"
import { useAuthContext } from "@/context"
import { post } from "@/lib/http"

export default function DashboardPage() {
  const { user, player } = useAuthContext()
  const [gameId, setGameId] = useState("")
  const router = useRouter()
  useEffect(() => {
    console.log({ player })
    if (user == null) router.push("/")
  }, [router, user])

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center pt-8">
        <div className="mb-auto text-center">
          <GameTitle />
        </div>
        <div className="flex h-full flex-col items-center justify-center space-y-4">
          <span className="-mt-32 mb-8 text-center">
            Welcome <br /> {user?.email}
          </span>

          {/* TODO: the 3d button effect pushes the content when pressed */}
          <input
            placeholder="GAME ID"
            className="w-full p-4 text-black"
            onChange={(e) => setGameId(e.target.value)}
          ></input>
          <button
            className="w-full rounded-sm border-b-4 border-b-green-700 bg-green-400 px-4 py-2 active:border-b-0"
            onClick={async () => {
              //TODO: perhaps change URL to /game/join/:id
              //      then we can apply the following in the backend
              //      add user to game
              //      update game in the db
              //      send message that a new player joined the game
              //      redirect user to /game/:id
              const joinGameResponse: any = await post(`/api/admin/game/${gameId}`, { player })
              router.push(`/game/${joinGameResponse.game}`)
              console.log({ joinGameResponse })
            }}
          >
            JOIN GAME
          </button>
          <button
            onClick={async () => {
              const createNewGameResponse: any = (await post("/api/admin/game", { player })) as any
              console.log({ createNewGameResponse })
              router.push(`/game/${createNewGameResponse.id}`)
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
