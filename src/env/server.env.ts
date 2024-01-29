import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    FIREBASE_DATABASE_URL: z.string().url(),
  },
  runtimeEnv: {
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
  },
})
