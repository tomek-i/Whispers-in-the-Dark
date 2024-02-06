import { NextRequest } from "next/server"
import signUp from "@/lib/auth/singup"

export async function POST(request: NextRequest, context: { params: any }) {
  //TODO: context only contains the dynamic route params,  the request.json() is what contains username/password
  console.log({ context: context.params })
  const { username, password } = context.params
  const { result, error } = await signUp(username, password)

  console.log({ result, error })
  if (error) {
    return Response.json({ status: "error", error })
  }
  return Response.json({ status: "ok", result })
}
