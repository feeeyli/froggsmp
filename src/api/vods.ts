import { VodSchema } from "@/types/vod.schema";

export async function getVods() {
  const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query MyQuery {
          days(last: 1000) {
            day
            server_day
            events
            vods(last: 20) {
              streamer
              vods
              fallback
              fallbacks
            }
          }
        }
        `,
    }),
    next: { revalidate: 15 },
  });
  const json = await response.json();

  return json.data.days as VodSchema[];
}
