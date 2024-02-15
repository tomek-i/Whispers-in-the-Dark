import { User } from "firebase/auth"
import { arrayUnion, collection, doc, getDocs, query, setDoc, updateDoc } from "firebase/firestore"
import { NextRequest } from "next/server"
import { firebase } from "@/lib/firebase"
import { createTroubleBrewingGame } from "@/lib/game"
import { Game } from "@/lib/game/Game"
import { Player } from "@/lib/game/Player"

//TODO: this is the same as admin/game at the moment

export async function GET(_: NextRequest) {
  const q = query(collection(firebase.firestore, "games")) //, where("gameStatus", "==", "open"));

  const querySnapshot = await getDocs(q)
  const result: Game[] = []
  querySnapshot.forEach((doc) => {
    result.push(doc.data() as Game)
  })

  return Response.json({ status: "ok", data: result })
}

export interface GameCreationPayload {
  id?: string
  user: User
}

export async function POST(request: NextRequest) {
  let { user } = (await request.json()) as GameCreationPayload

  const player = new Player(user)

  console.log({ player })
  const game = createTroubleBrewingGame(player)

  //TODO: exract this to a service function
  try {
    await setDoc(doc(firebase.firestore, "games", game.code), game.toPlain())

    //TODO: update "user-games" with the game id
    const userGameDoc = doc(firebase.firestore, "user-games", user.uid)
    await updateDoc(userGameDoc, {
      code: arrayUnion(game.code),
    })
  } catch (error) {
    console.error(error)
  }

  return Response.json({ status: "ok", data: game })
}
