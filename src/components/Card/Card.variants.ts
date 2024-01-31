import { cva } from "class-variance-authority"

export const CardVariants = cva("relative rounded-lg shadow-lg", {
  variants: {
    variant: {
      default: "bg-slate-300",
    },
    size: {
      default: "p-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})
