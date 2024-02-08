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
      <div className="top-0 left-0 z-50 flex items-center justify-center w-full h-full text-black ">
        <div className="relative p-8 rounded-lg">
          <form className="flex flex-col space-y-4">
            <div className="">
              {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                email
              </label> */}
              <input
                type="text"
                id="email"
                name="email"
                placeholder="email"
                className="p-2 text-black border border-gray-300 rounded-md"
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
                className="p-2 border border-gray-300 rounded-md"
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
                className="p-2 text-black border border-gray-300 rounded-md"
                style={{ backgroundColor: rgba }}
              />
            </div>
            <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
