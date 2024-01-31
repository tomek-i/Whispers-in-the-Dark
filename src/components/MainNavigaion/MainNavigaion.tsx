"use client"
import { type VariantProps } from "class-variance-authority"
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
    <nav className="flex justify-between bg-gray-100 py-2 text-gray-900 dark:bg-gray-800 lg:py-4">
      <div className="px-3">
        <Link href="/">
          <div className="h-10 w-10 rounded-full bg-gray-600"></div>
        </Link>
      </div>

      <div className="flex items-center">
        <div className=" mt-2  grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto">
          <div className="mr-4 flex items-center">
            {user && (
              <>
                <ul className="mr-8 flex space-x-4">
                  <li>
                    <Link href="/dashboard"> Dashboard</Link>
                  </li>
                  <li>
                    <Link href="/games">Games</Link>
                  </li>
                </ul>
              </>
            )}

            {user && (
              <>
                <span className="mr-3 cursor-default">{user.email}</span>
                <div className="h-12 w-12 rounded-full bg-slate-600 hover:bg-slate-400" />
              </>
            )}
            {!user && (
              <>
                <Link
                  href="/login"
                  type="button"
                  className="text-primary mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none"
                >
                  Login
                </Link>
                <button
                  type="button"
                  className="bg-primary mr-3 inline-block rounded bg-primary-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Sign up for free
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
