import { z } from "zod";

const streamerSchema = z.object({
  display_name: z.string(),
  avatar_url: z.string(),
  skin_id: z.string(),
  twitch_login: z.string().nullable(),
  twitter_login: z.string().nullable(),
  youtube_login: z.string().nullable(),
  characters: z.array(
    z.object({
      name: z.string(),
      wiki_url: z.string(),
    })
  ),
});

export type StreamerSchema = z.infer<typeof streamerSchema>;
