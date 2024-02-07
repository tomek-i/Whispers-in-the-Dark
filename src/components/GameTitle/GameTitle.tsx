import { type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"
import React from "react"
import { twMerge } from "tailwind-merge"
import { GameTitleVariants } from "./GameTitle.variants"

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
    <h1 className="-z-10 text-center text-6xl font-bold text-white sm:text-7xl md:text-8xl lg:text-9xl">
      <span className="block text-2xl font-light text-gray-400 sm:text-3xl md:text-4xl lg:text-5xl">
        Whispers in the Dark
      </span>
      <span className="font-bold text-white drop-shadow-[0_5px_20px_rgb(255,0,0,0.4)]">Shadows Unveiled</span>
    </h1>
  )
}
