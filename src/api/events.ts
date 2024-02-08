import { EventSchema } from "@/types/event.schema";

export async function getEvents() {
  const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query Events {
          events {
            name
            time
            announcements {
              link
              pictures
              publisher
              text
              id
            }
            slug
          }
        }
        `,
    }),
    next: { revalidate: 30 },
  });
  const json = await response.json();

  return json.data.events as EventSchema[];
}
