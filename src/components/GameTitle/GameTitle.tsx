import { type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"
import { Homemade_Apple, Nosifer, Zeyada } from "next/font/google"
import React from "react"
import { twMerge } from "tailwind-merge"
import { GameTitleVariants } from "./GameTitle.variants"

const zeyada = Zeyada({
  weight: "400",
  subsets: ["latin"],
})
const nosifer = Nosifer({
  weight: "400",
  subsets: ["latin"],
})

type GameTitleProps = { disabled?: false } & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof GameTitleVariants>

export const GameTitle: React.FC<GameTitleProps> = ({
  className = "",
  size = "default",
  variant = "default",
  ...props
}) => {
  // return <div className={twMerge(clsx(GameTitleVariants({ variant, size, className })))} {...props}></div>

  return (
    <h1 className={`-z-10 text-center text-6xl font-bold text-white  ${className} `}>
      <span
        className={`block text-2xl font-light text-gray-400 sm:text-3xl md:text-4xl lg:text-5xl ${zeyada.className}`}
      >
        Whispers in the Dark
      </span>
      <span className={`-mt-2 block font-bold drop-shadow-[2px_12px_3px_rgb(255,0,0,0.4)] ${nosifer.className}`}>
        Shadows Unveiled
      </span>
    </h1>
  )
}
