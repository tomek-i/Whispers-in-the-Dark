"use client"

import { AuthContextProvider } from "@/context"

export default function BackendLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthContextProvider>{children}</AuthContextProvider>
    </>
  )
}
