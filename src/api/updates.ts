import { UpdateSchema } from "@/types/update.schema";

export async function getUpdates() {
  const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query Updates {
          updates {
            link
            text
            date
            pictures
            id
          }
        }
        `,
    }),
    next: { revalidate: 30 },
  });
  const json = await response.json();

  return json.data.updates as UpdateSchema[];
}
