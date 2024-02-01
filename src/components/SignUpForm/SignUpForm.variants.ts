import { cva } from "class-variance-authority"
import { tv } from "tailwind-variants"

export const SignUpFormVariants = cva("", {
  variants: {
    variant: {
      default: "text-gray-900",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})
