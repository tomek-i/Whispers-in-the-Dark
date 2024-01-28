import signIn from "@/lib/auth/signin"
import { NextRequest } from "next/server"

export async function POST(request: NextRequest, context: { params: any }) {
  console.log({ context: context.params })
  const { username, password } = context.params
  const { result, error } = await signIn(username, password)

  console.log({
    result,
    error,
  })

  if (error) {
    return Response.json({ status: "error", error })
  }
  return Response.json({ status: "ok", result })
}
