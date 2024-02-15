"use client"
import { type VariantProps } from "class-variance-authority"
import { useRouter } from "next/navigation"
import React, { FormEvent, useState } from "react"
import { toast } from "react-toastify"
import { AuthService } from "@/services/auth.service"
import { UserService } from "@/services/user.service"
import { RegistrationFormVariants } from "./RegistrationForm.variants"

type RegistrationFormProps = { disabled?: false } & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof RegistrationFormVariants>

export const RegistrationForm: React.FC<RegistrationFormProps> = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [playerName, setPlayerName] = useState("")

  // return <div className={twMerge(clsx(RegistrationFormVariants({ variant, size, className })))} {...props}></div>
  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    //TODO: add post request to register
    const authService = new AuthService()
    authService.onSignUpSuccess(async (user) => {
      toast.success("Signed up successfully!")
      const userService = new UserService()
      await userService.createProfile(user, playerName)
      router.push("/dashboard")
    })
    await authService.signUp(email, password)
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
            <div className="">
              <input
                type="text"
                id="playerName"
                name="playerName"
                placeholder="Player Name"
                className="rounded-md border border-gray-300 p-2 text-black"
                style={{ backgroundColor: rgba }}
                onChange={(e) => setPlayerName(e.target.value)}
              />
            </div>
            <button type="submit" className="rounded-md bg-blue-500 px-4 py-2 text-white">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
