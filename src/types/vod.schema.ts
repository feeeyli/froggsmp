import { z } from "zod";

const vodSchema = z.object({
  day: z.string(),
  server_day: z.number(),
  events: z.array(z.string()),
  vods: z.array(
    z.object({
      streamer: z.string(),
      vods: z.array(z.string()),
      fallbacks: z.array(z.string()),
      fallback: z.boolean(),
    })
  ),
});

export type VodSchema = z.infer<typeof vodSchema>;
