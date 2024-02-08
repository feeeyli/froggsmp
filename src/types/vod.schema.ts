import { z } from "zod";

const vodSchema = z.object({
  day: z.string(),
  server_day: z.number(),
  event: z.string().optional(),
  vods: z.record(z.array(z.string())),
});

export type VodSchema = z.infer<typeof vodSchema>;
