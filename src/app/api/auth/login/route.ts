import { NextRequest } from "next/server"
import signIn from "@/lib/auth/signin"

export async function POST(_request: NextRequest, context: { params: any }) {
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
