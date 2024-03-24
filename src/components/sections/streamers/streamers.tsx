import { Typing } from "@/components/animations/typing";
import { STREAMERS } from "@/data/streamers";
import { Streamer } from "./streamer";

type StreamersProps = {
  online_streamers: string[];
};

export function Streamers(props: StreamersProps) {
  return (
    <section className="px-4 sm:px-8 md:px-20 lg:px-[8rem] py-8 gap-6 flex flex-col">
      <div className="px-8">
        <Typing as="h2" className="text-3xl font-semibold" id="participantes">
          Participantes
        </Typing>
      </div>
      <div className="flex flex-wrap gap-4 justify-center max-w-7xl mx-auto group/container">
        {STREAMERS.map((streamer) => ({
          ...streamer,
          is_live: props.online_streamers.includes(streamer.twitch_login ?? ""),
        }))
          .sort((x, y) => (x.is_live === y.is_live ? 0 : x.is_live ? -1 : 1))
          .map((streamer, i) => (
            <Streamer
              streamer={streamer}
              key={streamer.twitch_login}
              index={i}
            />
          ))}
      </div>
    </section>
  );
}
