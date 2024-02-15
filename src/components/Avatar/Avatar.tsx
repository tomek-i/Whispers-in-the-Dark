import { type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"
import { User } from "firebase/auth"
import Image from "next/legacy/image"
import React from "react"
import { twMerge } from "tailwind-merge"
import { AvatarVariants } from "./Avatar.variants"

type AvatarProps = { user?: User; src?: string; alt?: string } & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof AvatarVariants>

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,

  size = "default",
  variant = "default",
}) => {
  //TODO: instead of src / alt use user object
  //TODO: add support for notification / status / badge bubble
  //TODO: onClick we probably want to open a dropdown menu on the parent with things like profile/logout etc

  return (
    <>
      <div className={twMerge(clsx(AvatarVariants({ variant, size })))}>
        {!src && <div className="flex h-12 w-12 bg-slate-500"></div>}
        {src && <Image src={src} alt={alt} className="rounded-full" objectFit="cover" layout="fill" />}
      </div>
    </>
  )

  // <div className={twMerge(clsx(AvatarVariants({ variant, size, className })))} {...props}></div>
}
