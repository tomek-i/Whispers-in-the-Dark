import { type VariantProps } from "class-variance-authority"
import React, { FC, FormEvent, PropsWithChildren, useState } from "react"
import { toast } from "react-toastify"
import { http } from "@/lib/http"
import { AuthService } from "@/services/auth.service"
import { LoginFormVariants } from "./LoginForm.variants"

type LoginFormProps = {
  onFormSubmit?: () => void
  onSuccess?: () => void
} & React.HTMLAttributes<HTMLDivElement> &
  PropsWithChildren &
  VariantProps<typeof LoginFormVariants>

export const LoginForm: FC<LoginFormProps> = ({ onFormSubmit, onSuccess }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onFormSubmit?.()

    const authService = new AuthService()
    authService.onError((error) => {
      toast.error(error.message)
      console.error({ error })
    })
    authService.onLoginSuccess(() => {
      onSuccess?.()
    })
    await authService.signIn(email, password)
  }
  const rgba = "rgba(255,255,255,0.8)"

  return (
    <>
      <div className="left-0 top-0 z-50 flex h-full w-full items-center justify-center text-black ">
        <div className="relative rounded-lg p-8">
          <form className="flex flex-col space-y-4" onSubmit={handleForm}>
            <div className="">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="email"
                className="rounded-md border border-gray-300 p-2 text-black"
                style={{ backgroundColor: rgba }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="rounded-md border border-gray-300 p-2"
                style={{ backgroundColor: rgba }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="rounded-md bg-blue-500 px-4 py-2 text-white">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
