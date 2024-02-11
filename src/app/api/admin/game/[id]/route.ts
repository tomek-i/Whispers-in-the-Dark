import { NextRequest } from "next/server"
import { OK } from "../route"

export async function POST(request: NextRequest, context: any) {
  const { id } = context.params
  const requestData = await request.json()
  console.log({ id, requestData })
  //TODO: get game from DB with ID
  //TODO: add player to game
  //TODO: return url to game /game/:id

  return OK({ game: id })
}
