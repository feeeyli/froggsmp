import { NewspaperSchema } from "@/types/newspaper.schema";

export async function getNewspapers() {
  const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query Newspapers {
          newspapers {
            day
            edition
            pages {
              picture
              transcript
            }
            link
          }
        }
        `,
    }),
    next: { revalidate: 30 },
  });
  const json = await response.json();

  return json.data.newspapers as NewspaperSchema[];
}
