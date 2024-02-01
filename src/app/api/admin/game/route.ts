import { get, ref, set } from "firebase/database"
import { NextRequest } from "next/server"
import { firebase } from "@/lib/firebase"
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
  const db = firebase.database
  console.log({ game })
  set(ref(db, "games/" + id), JSON.stringify(game))

  return Response.json({ status: "ok", id, game })
}

export async function GET(_request: NextRequest) {
  const db = firebase.database
  const snapshot = await get(ref(db, "games/"))
  console.log(snapshot.val())
  return Response.json({ status: "ok", games: snapshot.val() })
}

export function OK(data: object) {
  return Response.json({ status: "ok", ...data })
}
