"use client"
import { type VariantProps } from "class-variance-authority"
import { signOut, User } from "firebase/auth"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import React, { ReactNode } from "react"
import { firebase } from "@/lib/firebase"
import { MainNavigaionVariants } from "./MainNavigaion.variants"
import { Avatar } from "../Avatar"

type MainNavigaionProps = {
  disabled?: boolean
  user?: User | null
  onLogoutClick?: () => void
} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof MainNavigaionVariants>

type ActiveLinkProps = {
  children: ReactNode
  href: string
}

//TODO: extract to own component with variants
function ActiveLink({ children, href }: ActiveLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href
  const className = isActive ? "border-b-2 border-b-red-900 text-red-900" : ""

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

export const MainNavigaion: React.FC<MainNavigaionProps> = ({ user = null }) => {
  const router = useRouter()

  return (
    <nav className="relative z-50 flex flex-wrap justify-between bg-green-900 py-2 text-white lg:py-4">
      <div className="px-3">
        <Link href="/">
          <Avatar src="/shadows-unveiled.jpg" alt="logo" />
        </Link>
      </div>

      <div className="flex items-center">
        <div className="grow items-center ">
          <div className="mr-4 flex items-center space-x-4">
            {user && (
              <>
                {/* TODO: probably can be extracted to NavigationMainMenu or something like that */}
                <ul className="mr-8 flex items-center space-x-4 uppercase">
                  <li>
                    <ActiveLink href="/dashboard">Dashboard</ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/games">Games</ActiveLink>
                  </li>
                </ul>
              </>
            )}

            {/* TODO: this section probably can be extracted to its own component, clicking on the avatar should open up a conetxt menu with logout etc. */}
            {user && (
              <>
                <Avatar user={user} />
                <button
                  className="uppercase"
                  onClick={async () => {
                    await signOut(firebase.auth)
                    router.push("/")
                  }}
                >
                  logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
