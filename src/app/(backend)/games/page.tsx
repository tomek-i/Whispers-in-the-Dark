"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Card } from "@/components/Card"
import { Game } from "@/lib/game/Game"
import { http } from "@/lib/http"

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
    const response = await http.get<any>("/api/admin/game")

    setGames(response.games as Game[])
  }
  useEffect(() => {
    loadAllGames()
  }, [])

  return (
    <div className="flex w-auto flex-col space-y-4 text-slate-900">
      {games?.map((game) => {
        return (
          <Card key={game.code}>
            {game.code} {"=>"} {game.gameMode}
            <pre>Night: {game.night}</pre>
            <pre>Players: {game.players.length}</pre>
            <pre>Created: null</pre>
            <button className="rounded bg-slate-500 px-4 py-2 ">
              <Link href={`/game/${game.code}`}>Join game {game.code}</Link>
            </button>
          </Card>
        )
      })}
    </div>
  )
}
