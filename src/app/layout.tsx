import Head from "next/head"

import Image from "next/legacy/image"

// import "react-toastify/dist/ReactToastify.css"
import "../styles/tailwind.css"
import { ToastContainer } from "react-toastify"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
        <link rel="apple-touch-icon" href="/apple-icon?<generated>" type="image/<generated>" sizes="<generated>" />
      </Head>
      <body className="bg-black text-gray-50">
        {children}

        <ToastContainer />
      </body>
    </html>
  )
}
