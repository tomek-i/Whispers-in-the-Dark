"use client"
import { redirect, useRouter } from "next/navigation"
import { useEffect, useLayoutEffect, useState } from "react"
import { GameTitle } from "@/components/GameTitle"
import { useAuthContext } from "@/context"
import { GameService } from "@/services/game.service"

export default function DashboardPage() {
  const { user, isLoading } = useAuthContext()
  const [gameId, setGameId] = useState("")
  const router = useRouter()

  //  useEffect(() => {
  //   console.log({ player })
  //   if (user == null) router.push("/")
  // }, [player, router, user])

  // useLayoutEffect(() => {
  //   console.log("user from layout in dashboard", user)
  //   if (!user && !isLoading) redirect("/")
  // }, [isLoading, user])

  function handleJoinGame() {
    //TODO: call api "/api/game/join/:id" so the player gets registered in the game
    //      if that was successfull then redirect to the game page
    // const joinGameResponse  = await post(`/api/game/join/${gameId}`, { player })

    //TODO: we should take the gameid from the joinGameResponse payload
    router.push(`/game/${gameId}`)
  }
  async function handleNewGame() {
    const gameService = new GameService()
    const createGameResponse = await gameService.createNewGame(user)
    console.log({ createGameResponse })
    //TODO: send api request  to /api/game/new
    //      which needs to create a new game, register the player as game master and return the game id
    //      then redirect/push to the game page
    // router.push(`/game/${gameId}/dashboard`)
  }

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

          <input placeholder="GAME ID" className="w-full p-4 text-black" onChange={(e) => setGameId(e.target.value)} />
          <button
            className="w-full rounded-sm border-b-4 border-b-green-700 bg-green-400 px-4 py-2 active:border-b-0"
            onClick={handleJoinGame}
          >
            JOIN GAME
          </button>
          <button
            onClick={handleNewGame}
            className="w-full rounded-sm border-b-4 border-b-red-700 bg-red-400 px-4 py-2 active:border-b-0"
          >
            NEW GAME
          </button>
        </div>
      </div>
    </>
  )
}
