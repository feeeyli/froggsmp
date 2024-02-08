import { VodSchema } from "@/types/vod.schema";
import { VodSelector } from "./vod-selector";

type WatchProps = {
  vods: VodSchema[];
};

export function Watch(props: WatchProps) {
  return (
    <section className="py-8 px-4 sm:px-8 md:px-20 lg:px-40 flex flex-col gap-6 bg-secondary/10">
      <h2 className="text-3xl font-semibold" id="assistir">
        VODs
      </h2>
      <VodSelector vods={props.vods} />
    </section>
  );
}
