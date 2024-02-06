import { type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"
import Image from "next/legacy/image"
import React from "react"
import { twMerge } from "tailwind-merge"
import { AvatarVariants } from "./Avatar.variants"

type AvatarProps = { src: string; alt: string } & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof AvatarVariants>

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,

  size = "default",
  variant = "default",
}) => {
  return (
    <div className={twMerge(clsx(AvatarVariants({ variant, size })))}>
      <Image src={src} alt={alt} className="rounded-full" objectFit="cover" layout="fill" />
    </div>
  )

  // <div className={twMerge(clsx(AvatarVariants({ variant, size, className })))} {...props}></div>
}
