"use client"
import { type VariantProps } from "class-variance-authority"
import Image from "next/legacy/image"
import Link from "next/link"
import React from "react"
import { useAuthContext } from "@/context"
import { MainNavigaionVariants } from "./MainNavigaion.variants"

type MainNavigaionProps = { disabled?: boolean } & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof MainNavigaionVariants>

export const MainNavigaion: React.FC<MainNavigaionProps> = ({
  className = "",
  size = "default",
  variant = "default",
  ...props
}) => {
  const { user } = useAuthContext()

  return (
    <nav className="flex flex-wrap justify-between bg-gray-100 py-2 text-gray-900 dark:bg-gray-800 lg:py-4">
      <div className="px-3">
        <Link href="/">
          <div className="relative h-10 w-10 rounded-full">
            <Image
              className="rounded-full"
              src="/whispers-in-the-dark.jpg"
              alt="logo"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </Link>
      </div>

      <div className="flex items-center">
        <div className="grow items-center ">
          <div className="mr-4 flex items-center space-x-4">
            {user && (
              <>
                <ul className="mr-8 flex items-center space-x-4 ">
                  <li className="">
                    <Link href="/dashboard">Dashboard</Link>
                  </li>
                  <li className="">
                    <Link href="/games">Games</Link>
                  </li>
                </ul>
              </>
            )}

            {user && (
              <>
                <span className="mr-3 cursor-default ">{user.email}</span>
                <div className="h-10 w-10 rounded-full bg-slate-600 hover:bg-slate-400" />
              </>
            )}
            {!user && (
              <>
                <Link href="/login" type="button" className="rounded bg-slate-100 px-4 py-2 hover:text-primary-600">
                  Login
                </Link>
                <Link
                  href="/signup"
                  type="button"
                  className="rounded bg-primary-600 px-4 py-2 text-white hover:bg-primary-500 "
                >
                  Sign up for free
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
