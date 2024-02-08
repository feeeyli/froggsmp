import { STREAMERS } from "@/data/streamers";
import { Streamer } from "./streamer";

type StreamersProps = {
  online_streamers: string[];
};

export function Streamers(props: StreamersProps) {
  return (
    <section className="px-4 sm:px-8 md:px-20 lg:px-[8rem] py-8 gap-6 flex flex-col">
      <h2 className="text-3xl font-semibold lg:px-8" id="participantes">
        Participantes
      </h2>
      <div className="flex flex-wrap gap-4 justify-center max-w-7xl mx-auto">
        {STREAMERS.map((streamer) => ({
          ...streamer,
          is_live: props.online_streamers.includes(streamer.twitch_login ?? ""),
        }))
          .sort((x, y) => (x.is_live === y.is_live ? 0 : x.is_live ? -1 : 1))
          .map((streamer) => (
            <Streamer streamer={streamer} key={streamer.twitch_login} />
          ))}
      </div>
    </section>
  );
}
