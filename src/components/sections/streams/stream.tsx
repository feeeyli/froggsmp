"use client";

/* eslint-disable @next/next/no-img-element */
import { StreamSchema } from "@/types/stream.schema";
import Link from "next/link";
import { TwitchPlayerNonInteractive } from "react-twitch-embed";
import { CarouselItem } from "../../ui/carousel";

type StreamProps = {
  stream: StreamSchema;
  autoplay: boolean;
};

export function Stream(props: StreamProps) {
  return (
    <CarouselItem className="sm:basis-[80%] max-w-[48rem]">
      <div className="flex flex-col rounded overflow-hidden">
        <div className="aspect-video bg-primary flex-grow">
          <TwitchPlayerNonInteractive
            channel={props.stream.login}
            autoplay={props.autoplay}
            muted
            className="h-full w-full"
          />
        </div>
        <article className="flex flex-col px-5 py-3 bg-background gap-3">
          <header className="flex flex-col gap-3 items-start">
            <Link
              href={"#" + props.stream.login}
              className="flex gap-2 items-center hover:text-primary transition-colors"
            >
              <img
                src={props.stream.thumbnail_url}
                alt={props.stream.display_name}
                className="h-8 w-8"
              />
              <span className="overflow-hidden text-ellipsis">
                {props.stream.display_name}
              </span>
            </Link>
            <h3 className="text-ellipsis font-bold line-clamp-2">
              {props.stream.title}
            </h3>
          </header>
        </article>
      </div>
    </CarouselItem>
  );
}
