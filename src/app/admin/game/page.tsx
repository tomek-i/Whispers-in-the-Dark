"use client"

import { GameCreationPayload } from "@/app/api/admin/game/route"
import { Util } from "@/lib/util"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function AdminDashboard() {
  const router = useRouter()

  const startNewGame = async () => {
    const response = await fetch("/api/admin/game", { method: "POST", body: JSON.stringify({ id: gameId }) })

    if (!response.ok) {
      // Handle error
      console.error("Failed to start new game")
      return
    }

    // Get the new game ID from the response
    const data = (await response.json()) as GameCreationPayload
    const id = data.id

    // Navigate to the new game page
    router.push(`/admin/game/${id}`)
  }

  const [gameId, setGameId] = useState("")
  useEffect(() => {
    if (gameId === "") setGameId(Util.createRandomgameId())
  }, [gameId])

  return (
    <>
      <input placeholder="enter a game id" defaultValue={gameId}></input>
      <button className="bg-primary-400 p-4" onClick={startNewGame}>
        Start new Game
      </button>
    </>
  )
}
