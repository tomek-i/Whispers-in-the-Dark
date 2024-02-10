import { get, getDatabase, ref, set } from "firebase/database"
import { doc, setDoc } from "firebase/firestore"
import { NextRequest } from "next/server"
import { firebase } from "@/lib/firebase"
import { Game } from "@/lib/game/Game"
import { GameMode } from "@/lib/game/gameModes"
import { Player } from "@/lib/game/Player"
import { Util } from "@/lib/util"

export interface GameCreationPayload {
  id?: string
  player: Player
}
export async function POST(request: NextRequest) {
  let { id, player } = (await request.json()) as GameCreationPayload
  if (!id) id = Util.createRandomgameId()

  const game = new Game(GameMode.TroubleBrewing)
  game.code = id
  game.GameMaster = player

  console.log("Saving game")
  try {
    await setDoc(doc(firebase.firestore, "games", id), {
      ...game,
    })
  } catch (error) {
    console.error(error)
  }

  console.log("OOOOK")
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
