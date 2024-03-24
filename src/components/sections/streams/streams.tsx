/* eslint-disable @next/next/no-img-element */
import { Typing } from "@/components/animations/typing";
import { Button } from "@/components/ui/button";
import { StreamSchema } from "@/types/stream.schema";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import { NoStreams } from "./no-streams";
import { Stream } from "./stream";

type StreamsProps = {
  streams: StreamSchema[];
};

export function Streams(props: StreamsProps) {
  return (
    <section className="px-4 sm:px-8 md:px-20 lg:px-40 py-8 flex flex-col gap-6">
      <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between">
        <Typing as="h2" className="text-3xl font-semibold" id="lives">
          Streamers em live
        </Typing>
        <Typing as="span" className="text-2xl font-semibold">
          {`Dia ${Math.ceil(
            (new Date().getTime() - new Date("2024-01-08 00:00").getTime()) /
              (1000 * 60 * 60 * 24)
          )}`}
        </Typing>
      </div>
      <Carousel>
        <CarouselContent>
          {props.streams.length > 0 &&
            props.streams
              .sort(
                (a, b) =>
                  new Date(b.started_at).getTime() -
                  new Date(a.started_at).getTime()
              )
              .map((stream, i) => (
                <Stream stream={stream} autoplay={i === 0} key={stream.login} />
              ))}
          {props.streams.length === 0 && <NoStreams />}
        </CarouselContent>
        <CarouselPrevious className="-left-1 sm:-left-4 lg:-left-12" />
        <CarouselNext className="-right-1 sm:-right-4 lg:-right-12" />
      </Carousel>
      {props.streams.length > 0 && (
        <Button className="font-semibold ml-auto" size="sm" asChild>
          <Link
            href={`https://multifrogg.vercel.app/pt?streamers=${props.streams
              .map((stream) => stream.login)
              .join("/")}`}
            target="_blank"
          >
            Assistir no MultiFrogg
            <ExternalLink size="1rem" className="ml-2" />
          </Link>
        </Button>
      )}
    </section>
  );
}
