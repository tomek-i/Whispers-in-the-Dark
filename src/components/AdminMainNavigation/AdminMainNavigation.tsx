import { type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"
import Link from "next/link"
import React, { forwardRef } from "react"
import { twMerge } from "tailwind-merge"
import { AdminMainNavigationVariants } from "./AdminMainNavigation.variants"

type AdminMainNavigationProps = {} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof AdminMainNavigationVariants>

export const AdminMainNavigation = forwardRef<HTMLElement, AdminMainNavigationProps>(function AdminMainNavigation(
  { className = "", size = "default", variant = "default", ...props },
  ref
) {
  return (
    <nav ref={ref} className={twMerge(clsx(AdminMainNavigationVariants({ variant, size, className })))} {...props}>
      <ul className="flex space-x-4">
        <li>
          <Link href="/admin/dashboard">Home</Link>
        </li>
        <li>
          <Link href="/admin/game">Game</Link>
        </li>
      </ul>
    </nav>
  )
})
