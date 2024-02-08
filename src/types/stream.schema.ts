import { z } from "zod";

const streamSchema = z.object({
  display_name: z.string(),
  login: z.string(),
  thumbnail_url: z.string(),
  title: z.string(),
  started_at: z.string(),
});

export type StreamSchema = z.infer<typeof streamSchema>;
