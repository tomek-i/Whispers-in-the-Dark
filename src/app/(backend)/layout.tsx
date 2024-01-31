"use client"

import { MainNavigaion } from "@/components/MainNavigaion"
import { AuthContextProvider } from "@/context"

export default function BackendLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthContextProvider>
        <MainNavigaion />
        {children}
      </AuthContextProvider>
    </>
  )
}
