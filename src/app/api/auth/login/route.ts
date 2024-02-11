import { NextRequest } from "next/server"
import signIn from "@/lib/auth/signin"

export async function POST(request: NextRequest) {
  //TODO: context only contains the dynamic route params,  the request.json() is what contains username/password

  const { username, password } = request.json() as any
  const { result, error } = await signIn(username, password)

  if (error) {
    return Response.json({ status: "error", error })
  }
  return Response.json({ status: "ok", result })
}
