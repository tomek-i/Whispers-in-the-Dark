import { type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"
import React from "react"
import { twMerge } from "tailwind-merge"
import { OverlayVariants } from "./Overlay.variants"

type OverlayProps = { disabled?: false } & React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof OverlayVariants>

export const Overlay: React.FC<OverlayProps> = ({
  className = "",
  size = "default",
  variant = "default",
  ...props
}) => {
  // return <div className={twMerge(clsx(OverlayVariants({ variant, size, className })))} {...props}></div>
  return <div className="absolute inset-0 -z-10 bg-black/20 backdrop-blur-sm"></div>
}
