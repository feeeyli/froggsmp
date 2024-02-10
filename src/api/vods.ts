import { VodSchema } from "@/types/vod.schema";

export async function getVods() {
  const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query Vods {
          vods {
            list
          }
        }
        `,
    }),
    next: { revalidate: 60 * 5 },
  });
  const json = await response.json();

  return json.data.vods[0].list as VodSchema[];
}
