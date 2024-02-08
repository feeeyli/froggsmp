import { z } from "zod";

const announcementSchema = z.object({
  link: z.string(),
  pictures: z.array(z.string()),
  publisher: z.string(),
  text: z.string(),
  id: z.string(),
  thread: z.boolean(),
});

const eventSchema = z.object({
  name: z.string(),
  slug: z.string(),
  time: z.string(),
  announcements: z.array(announcementSchema),
});

export type EventSchema = z.infer<typeof eventSchema>;

export type AnnouncementSchema = z.infer<typeof announcementSchema>;
