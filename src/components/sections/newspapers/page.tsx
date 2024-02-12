/* eslint-disable @next/next/no-img-element */
import { PageSchema } from "@/types/newspaper.schema";

type PageProps = {
  page: PageSchema;
};

export function Page(props: PageProps) {
  return (
    <img
      alt="image-1"
      width={254}
      height={254 / 0.707}
      src={props.page.picture}
      className="h-full w-full object-cover aspect-[0.707] rounded-md border border-border"
    />
  );
}
