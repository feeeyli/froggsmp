import { getEvents } from "@/api/events";
import { getNewspapers } from "@/api/newspapers";
import { getUpdates } from "@/api/updates";
import { getVods } from "@/api/vods";
import { Header } from "@/components/header";
import { Events } from "@/components/sections/events/events";
import { Newspapers } from "@/components/sections/newspapers/newspapers";
import { Streamers } from "@/components/sections/streamers/streamers";
import { Streams } from "@/components/sections/streams/streams";
import { Timeline } from "@/components/sections/timeline/timeline";
import { Updates } from "@/components/sections/updates/updates";
import { Watch } from "@/components/sections/watch/watch";
import { StreamSchema } from "@/types/stream.schema";
import Link from "next/link";

export default async function Home() {
  const streams: StreamSchema[] = await fetch(
    process.env.NEXT_PUBLIC_BASE_API_URL + "/api/streams",
    {
      next: { revalidate: 30 },
    }
  ).then((res) => res.json());

  const events = await getEvents();
  const updates = await getUpdates();
  const vods = await getVods();
  const newspapers = await getNewspapers();

  return (
    <>
      <Header />
      <main className="odd:[&>section]:bg-secondary/10">
        <Streams streams={streams} />
        <Streamers online_streamers={streams.map((stream) => stream.login)} />
        <Events
          events={events.sort(
            (x, y) => new Date(y.time).getTime() - new Date(x.time).getTime()
          )}
        />
        <Updates
          updates={updates.sort(
            (x, y) => new Date(y.date).getTime() - new Date(x.date).getTime()
          )}
        />
        <Newspapers newspapers={newspapers} />
        <Timeline />
        <Watch vods={vods} />
      </main>
      <footer className="px-8 md:px-20 lg:px-40 py-10 bg-foreground text-background flex flex-col gap-4">
        <p>
          Feito com 💚 por{" "}
          <Link
            href="https://twitter.com/feeeyli"
            className="text-[#FFA4CF] underline-offset-4 hover:underline"
          >
            feyli
          </Link>
          , para toda comunidade da Frogg!
        </p>
        <p>Este site não é oficial e não tem nenhuma filiação com a FroggTV.</p>
      </footer>
    </>
  );
}
