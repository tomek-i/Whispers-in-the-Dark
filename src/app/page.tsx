import { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/Button/Button"
import { MainNavigaion } from "@/components/MainNavigaion"

export const metadata: Metadata = {
  title: "Blood on the Clock - Tomek Iwainski",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://github.com/tomek-i/BloodOnTheClock/",
    images: [
      {
        width: 2000,
        height: 1120,
        url: "https://github.com/tomek-i/BloodOnTheClock/main/.github/assets/project-logo.jpg",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <MainNavigaion />
      <section className="">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto flex flex-col items-center place-self-center text-center align-middle">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Blood on the Clock
            </h1>
            <Image src="/blood-on-the-clock.jpg" width={640 / 2} height={832 / 2} alt="Blood on the Clock logo" />

            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Are you interested in helping and contributing to this project?
            </p>

            <Button href="https://github.com/tomek-i/BloodOnTheClock" className="mr-3">
              Get started
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
