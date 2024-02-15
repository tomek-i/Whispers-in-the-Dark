import { collection, doc, getDocs, query, setDoc } from "firebase/firestore"
import { NextRequest } from "next/server"
import { firebase } from "@/lib/firebase"
import { createTroubleBrewingGame } from "@/lib/game"
import { Player } from "@/lib/game/Player"

export interface GameCreationPayload {
  id?: string
  player: Player
}

export async function POST(request: NextRequest) {
  let { player } = (await request.json()) as GameCreationPayload

  const game = createTroubleBrewingGame(player)

  //TODO: exract this to a service function
  try {
    await setDoc(doc(firebase.firestore, "games", game.code), {
      ...game,
    })
  } catch (error) {
    console.error(error)
  }

  return Response.json({ status: "ok", game })
}

export async function GET(_: NextRequest) {
  const q = query(collection(firebase.firestore, "games")) //, where("gameStatus", "==", "open"));

  const querySnapshot = await getDocs(q)
  const result: any = []
  querySnapshot.forEach((doc) => {
    result.push(doc.data())
  })

  return Response.json({ status: "ok", games: result })
}
