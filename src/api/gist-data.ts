import { NewspaperSchema } from "@/types/newspaper.schema";
import { UpdateSchema } from "@/types/update.schema";
import { VodSchema } from "@/types/vod.schema";

export async function getGistData() {
  const response = await fetch(
    "https://api.github.com/gists/3aaa26f0a775e5e9c72d29442285048e",
    {
      next: { revalidate: 300 },
    }
  );

  const json = await response.json();

  return {
    vods: JSON.parse(json.files["froggsmp-vods.json"].content) as VodSchema[],
    updates: JSON.parse(
      json.files["froggsmp-updates.json"].content
    ) as UpdateSchema[],
    newspapers: JSON.parse(
      json.files["correio-froggiano.json"].content
    ) as NewspaperSchema[],
  };
}
