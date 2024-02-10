import { NextRequest } from "next/server"
import signUp from "@/lib/auth/singup"

export async function POST(request: NextRequest) {
  //TODO: context only contains the dynamic route params,  the request.json() is what contains username/password
  const { username, password, playerName } = request.json() as any
  const { result, error } = await signUp(username, password, playerName)

  console.log({ result, error })
  if (error) {
    return Response.json({ status: "error", error })
  }
  return Response.json({ status: "ok", result })
}
