import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    PUSHER_APP_SECRET: z.string(),
  },
  runtimeEnv: {
    PUSHER_APP_SECRET: process.env.PUSHER_APP_SECRET,
  },
})
