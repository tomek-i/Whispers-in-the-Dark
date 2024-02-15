"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Game } from "@/lib/game/Game"
import { GameService } from "@/services/game.service"

export default function GamesPage() {
  const [games, setGames] = useState<Game[]>()

  const loadAllGames = async () => {
    const gameService = new GameService()
    const games = await gameService.getGames()
    setGames(games ?? [])
    // const response = await http.get<any>("/api/admin/game")
    // setGames(response.games as Game[])
  }

  useEffect(() => {
    loadAllGames()
  }, [])

  return (
    <table className="mx-auto table-auto bg-white text-black">
      <thead>
        <tr>
          <th>Code</th>
          <th>Game Mode</th>
          <th>Night</th>
          <th>Players</th>
          <th>Created</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr key="replace with game id">
          <td>game id</td>
          <td>game mode</td>
          <td>nights</td>
          <td>amount of players</td>
          <td>date created</td>
          <td className="item flex justify-center">
            <button className="m-2 rounded bg-blue-700 px-4 py-2 uppercase text-white">
              <Link href={`/game/replac with game id`}>JOIN</Link>
            </button>
          </td>
        </tr>

        {games?.map((game) => (
          <tr key={game.code}>
            <td>{game.code}</td>
            <td>{game.gameMode}</td>
            <td>{game.night}</td>
            <td>{game.players.length}</td>
            <td>{game.createdAt.toISOString()}</td>
            <td className="item flex justify-center">
              <button className="m-2 rounded bg-blue-700 px-4 py-2 uppercase text-white">
                <Link href={`/game/replac with game id`}>JOIN</Link>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
