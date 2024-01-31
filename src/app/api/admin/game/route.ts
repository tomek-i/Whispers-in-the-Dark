import { NextRequest } from "next/server"
import { Game } from "@/lib/game/Game"
import { GameMode } from "@/lib/game/gameModes"
import { Util } from "@/lib/util"

export async function GET() {
  return Response.json({ status: "ok" })
}

export interface GameCreationPayload {
  id?: string
}
export async function POST(request: NextRequest) {
  let { id } = (await request.json()) as GameCreationPayload
  if (!id) id = Util.createRandomgameId()

  // Store the game in memory
  const game = new Game(GameMode.TroubleBrewing)
  //TODO: store in firebase

  return Response.json({ status: "ok", id, game })
}

export function OK(data: object) {
  return Response.json({ status: "ok", ...data })
}
