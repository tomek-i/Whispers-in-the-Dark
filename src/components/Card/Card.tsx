import { type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"
import React from "react"
import { twMerge } from "tailwind-merge"
import { CardVariants } from "./Card.variants"

type CardProps = {} & React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof CardVariants>

export const Card: React.FC<CardProps> = ({ className = "", size = "default", variant = "default", ...props }) => {
  return <div className={twMerge(clsx(CardVariants({ variant, size, className })))} {...props}></div>
}
