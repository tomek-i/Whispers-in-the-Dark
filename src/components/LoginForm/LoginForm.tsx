import { type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"
import { useRouter } from "next/navigation"
import React, { FormEvent, PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"
import signIn from "@/lib/auth/signin"
import { LoginFormVariants } from "./LoginForm.variants"
import { Card } from "../Card"

type LoginFormProps = {} & React.HTMLAttributes<HTMLDivElement> &
  PropsWithChildren &
  VariantProps<typeof LoginFormVariants>

export const LoginForm: React.FC<LoginFormProps> = ({ className = "", variant = "default", ...props }) => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const router = useRouter()

  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { result, error } = await signIn(email, password)

    if (error) {
      return console.log(error)
    }

    // else successful
    console.log({ result })
    return router.push("/dashboard")
  }
  return (
    <Card className={twMerge(clsx(LoginFormVariants({ variant, className })))} {...props}>
      <form onSubmit={handleForm} className="flex flex-col space-y-4">
        <label htmlFor="email">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded p-2"
            type="email"
            name="email"
            id="email"
            placeholder="example@mail.com"
          />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            required
            className="rounded p-2"
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </label>
        <button type="submit" className="rounded bg-blue-400 p-4">
          Login
        </button>
      </form>
    </Card>
  )
}
