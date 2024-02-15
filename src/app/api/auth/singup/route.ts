import { NextRequest } from "next/server"
import { AuthService } from "@/services/auth.service"

export async function POST(request: NextRequest) {
  const { username, password, playerName } = request.json() as any
  const { result, error } = await new AuthService().signUp(username, password, playerName)

  if (error) {
    return Response.json({ status: "error", error })
  }
  return Response.json({ status: "ok", result })
}
