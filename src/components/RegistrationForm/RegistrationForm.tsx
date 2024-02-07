import { type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"
import Image from "next/legacy/image"
import React from "react"
import { twMerge } from "tailwind-merge"
import { RegistrationFormVariants } from "./RegistrationForm.variants"
import { Overlay } from "../Overlay"

type RegistrationFormProps = { disabled?: false } & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof RegistrationFormVariants>

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  className = "",
  size = "default",
  variant = "default",
  ...props
}) => {
  // return <div className={twMerge(clsx(RegistrationFormVariants({ variant, size, className })))} {...props}></div>

  const rgba = "rgba(255,255,255,0.8)"
  return (
    <>
      <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center text-black">
        <div className="relative rounded-lg p-8">
          <form className="flex flex-col space-y-4">
            <div className="">
              {/* <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label> */}
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                className="rounded-md border border-gray-300 p-2 text-black"
                style={{ backgroundColor: rgba }}
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
              />
            </div>
            <div className="">
              {/* <label htmlFor="playerName" className="block text-sm font-medium text-gray-700">
                Player Name
              </label> */}
              <input
                type="text"
                id="playerName"
                name="playerName"
                placeholder="Player Name"
                className="rounded-md border border-gray-300 p-2 text-black"
                style={{ backgroundColor: rgba }}
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
