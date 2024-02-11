import { NextRequest } from "next/server"
import signUp from "@/lib/auth/singup"

export async function POST(request: NextRequest) {
  const { username, password, playerName } = request.json() as any
  const { result, error } = await signUp(username, password, playerName)

  if (error) {
    return Response.json({ status: "error", error })
  }
  return Response.json({ status: "ok", result })
}
