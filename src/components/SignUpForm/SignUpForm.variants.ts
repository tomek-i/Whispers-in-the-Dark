import { cva } from "class-variance-authority"

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
