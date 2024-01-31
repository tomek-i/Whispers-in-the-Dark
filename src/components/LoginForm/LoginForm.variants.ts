import { cva } from "class-variance-authority"
import { tv } from "tailwind-variants"

export const LoginFormVariants = cva("", {
  variants: {
    variant: {
      default: "text-gray-900",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export const LoginFormVariantsTv = tv({
  base: "",
  variants: {
    intent: {
      default: "",
    },
  },
  defaultVariants: {
    intent: "default",
  },
})
