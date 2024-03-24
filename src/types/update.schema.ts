import { z } from "zod";

const updateSchema = z.object({
  link: z.string(),
  // text: z.string(),
  date: z.string(),
  // pictures: z.array(z.string()),
  picture: z.string(),
  // id: z.string(),
});

export type UpdateSchema = z.infer<typeof updateSchema>;
