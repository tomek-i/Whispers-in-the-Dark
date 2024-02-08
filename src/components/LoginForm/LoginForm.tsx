import { type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"
import { useRouter } from "next/navigation"
import React, { FC, FormEvent, PropsWithChildren, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"
import signIn from "@/lib/auth/signin"
import { LoginFormVariants } from "./LoginForm.variants"
import { Card } from "../Card"

type LoginFormProps = {
  onFormSubmit: () => void
} & React.HTMLAttributes<HTMLDivElement> &
  PropsWithChildren &
  VariantProps<typeof LoginFormVariants>

export const LoginForm: FC<LoginFormProps> = ({ className = "", variant = "default", onFormSubmit, ...props }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const router = useRouter()

  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { result, error } = await signIn(email, password)

    if (error) {
      return console.log(error)
    }

    // else successful

    onFormSubmit()
  }
  const rgba = "rgba(255,255,255,0.8)"

  return (
    <>
      <div className="left-0 top-0 z-50 flex h-full w-full items-center justify-center text-black ">
        <div className="relative rounded-lg p-8">
          <form className="flex flex-col space-y-4" onSubmit={handleForm}>
            <div className="">
              {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                email
              </label> */}
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
              {/* <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label> */}
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
