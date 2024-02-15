"use client"
import Head from "next/head"
import "../styles/tailwind.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { AuthContextProvider } from "@/context"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  //TODO: migrate to the metadata API: https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-3-migrating-nexthead
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
        <link rel="apple-touch-icon" href="/apple-icon?<generated>" type="image/<generated>" sizes="<generated>" />
      </Head>
      <body className="bg-black text-gray-50">
        {/* TODO: is this really where it has to be?! */}
        <AuthContextProvider>
          {children}

          <ToastContainer />
        </AuthContextProvider>
      </body>
    </html>
  )
}
