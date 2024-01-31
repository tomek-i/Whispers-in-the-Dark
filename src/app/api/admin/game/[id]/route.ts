import { NextRequest } from "next/server"
import { OK } from "../route"

export async function GET(request: NextRequest, context: { params: any }) {
  const _gameId = (context as any).params.id

  return OK({ game: _gameId })
}
