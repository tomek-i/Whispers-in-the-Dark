import Head from "next/head"

import Image from "next/legacy/image"

import "react-toastify/dist/ReactToastify.css"
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
      <body className="bg-gray-900 text-gray-50">
        {children}
        {/* NOTE: cannot use next/legacy/image because it will not get blurry for some reason */}

        <Image
          src="/bloody-allyway.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background image"
          priority={true}
          className="absolute inset-0 -z-20"
        />
        {/* <img
          className="absolute inset-0 -z-10 h-full w-full rounded-lg object-cover"
          src="bloody-allyway.jpg"
          alt="background image"
        /> */}
        <ToastContainer />
      </body>
    </html>
  )
}
