import { cva } from "class-variance-authority"

export const AvatarVariants = cva("relative overflow-hidden rounded-full", {
  variants: {
    variant: {
      default: "",
    },
    size: {
      default: "h-10 w-10",
      small: "h-8 w-8",
      large: "h-12 w-12",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})
