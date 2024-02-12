import { z } from "zod";

const pageSchema = z.object({
  picture: z.string(),
  transcript: z.string(),
});

const newspaperSchema = z.object({
  day: z.string(),
  edition: z.number(),
  pages: z.array(pageSchema),
  link: z.string(),
});

export type NewspaperSchema = z.infer<typeof newspaperSchema>;

export type PageSchema = z.infer<typeof pageSchema>;
