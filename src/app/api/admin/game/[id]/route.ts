import { env } from "@/env/server.env" // On server
import { NextRequest } from "next/server"
import { OK } from "../route"

export async function GET(request: NextRequest, context: { params: any }) {
  const gameId = (context as any).params.id

  console.log({ game: env.FIREBASE_API_KEY })

  return OK({ game: env.FIREBASE_API_KEY })
}
