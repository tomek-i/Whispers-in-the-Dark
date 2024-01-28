import signUp from "@/lib/auth/singup"
import { NextRequest } from "next/server"

export async function POST(request: NextRequest, context: { params: any }) {
  console.log({ context: context.params })
  const { username, password } = context.params
  const { result, error } = await signUp(username, password)

  console.log({ result, error })
  if (error) {
    return Response.json({ status: "error", error })
  }
  return Response.json({ status: "ok", result })
}