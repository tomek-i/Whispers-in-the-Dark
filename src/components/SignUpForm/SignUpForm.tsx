import { type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"
import React from "react"
import { twMerge } from "tailwind-merge"
import { SignUpFormVariants } from "./SignUpForm.variants"

type SignUpFormProps = { disabled?: boolean } & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof SignUpFormVariants>

export const SignUpForm: React.FC<SignUpFormProps> = ({
  className = "",
  size = "default",
  variant = "default",
  ...props
}) => {
  return <div className={twMerge(clsx(SignUpFormVariants({ variant, size, className })))} {...props}></div>
}
