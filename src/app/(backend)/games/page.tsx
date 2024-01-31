"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Game } from "@/lib/game/Game"

type GameListResponse = {
  status: string
  games: Games
}
type Games = {
  [key: string]: string
}

export default function GamesPage() {
  const [games, setGames] = useState<Game[]>()

  const loadAllGames = async () => {
    const response = await fetch("/api/admin/game", { method: "GET" })

    if (!response.ok) {
      // Handle error
      console.error("Failed to start new game")
      return
    }
    const data = (await response.json()) as GameListResponse
    console.log(data)
    // Get the new game ID from the response
    const gamesArray = Object.values(data.games).map((x) => JSON.parse(x)) as Game[]

    setGames(gamesArray)
  }
  // Call loadAllGames when the component mounts
  useEffect(() => {
    loadAllGames()
  }, [])

  console.log({ games })
  if (!games) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {games.map((game) => {
        return (
          <div key={game.code}>
            {game.code} {"=>"} {game.gameMode} <pre>{JSON.stringify(game)}</pre>
            {/* TODO: should not be a link needs to be an API call  */}
            <Link href={`/admin/game/join/${game.code}`}>Join game</Link>
          </div>
        )
      })}
    </div>
  )
}
