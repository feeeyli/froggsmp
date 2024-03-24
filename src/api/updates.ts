import { UpdateSchema } from "@/types/update.schema";

export async function getUpdates() {
  // const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     query: `
  //       query Updates {
  //         updates(last: 1000) {
  //           link
  //           text
  //           date
  //           pictures
  //           id
  //         }
  //       }
  //       `,
  //   }),
  //   next: { revalidate: 30 },
  // });
  // const json = await response.json();

  // return json.data.updates as UpdateSchema[];

  const response = await fetch(
    "https://api.github.com/gists/3aaa26f0a775e5e9c72d29442285048e",
    {
      next: { revalidate: 300 },
    }
  );

  const json = await response.json();

  return JSON.parse(
    json.files["froggsmp-updates.json"].content
  ) as UpdateSchema[];
}
