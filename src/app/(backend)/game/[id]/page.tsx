"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useAuthContext } from "@/context"
import { usePusherChannel } from "@/hooks/pusherChannel/pusherChannel"
import { GameMessagingService } from "@/lib/game/messages"

export default function GamePage({ params }: { params: { id: string } }) {
  const { player, user } = useAuthContext()
  const router = useRouter()

  const gameChannel = "game-" + params.id

  //TODO: extract events like player-joined to an enum or something
  //TODO: is being recieved twice
  //TODO: probably this particular message should ignore the sender?
  const playerJoinedMessages = usePusherChannel(gameChannel, "player-joined")

  useEffect(() => {
    const joinPlayer = async () => {
      if (params.id && player) {
        //TODO: is being sent twice?
        console.log("sending player joined message")
        await GameMessagingService.playerJoined(params.id, player)
      }
    }

    joinPlayer()
  }, [params.id, player])

  return (
    <>
      <p>Game Page: {params.id}</p>
      <p>Player:</p>
      <pre>{JSON.stringify(player)}</pre>
      <p>User:</p>
      <pre>{JSON.stringify(user)}</pre>

      <p>Current Players:</p>
      {playerJoinedMessages.map((message: string, index: number) => (
        <div key={index}>{message}</div>
      ))}
    </>
  )
}
