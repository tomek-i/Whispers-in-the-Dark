import { get, ref, set } from "firebase/database"
import { NextRequest } from "next/server"
import { database } from "@/lib/db"
import { Game } from "@/lib/game/Game"
import { GameMode } from "@/lib/game/gameModes"
import { Util } from "@/lib/util"

export interface GameCreationPayload {
  id?: string
}
export async function POST(request: NextRequest) {
  let { id } = (await request.json()) as GameCreationPayload
  if (!id) id = Util.createRandomgameId()

  const game = new Game(GameMode.TroubleBrewing)
  game.code = id
  //TODO: store in firebase
  const db = database
  console.log({ game })
  set(ref(db, "games/" + id), JSON.stringify(game))

  return Response.json({ status: "ok", id, game })
}

export async function GET(_request: NextRequest) {
  const db = database
  const snapshot = await get(ref(db, "games/"))
  console.log(snapshot.val())
  return Response.json({ status: "ok", games: snapshot.val() })
}

export function OK(data: object) {
  return Response.json({ status: "ok", ...data })
}
