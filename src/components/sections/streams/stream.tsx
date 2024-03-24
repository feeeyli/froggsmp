"use client";

/* eslint-disable @next/next/no-img-element */
import { SLIDE_RIGHT_ANIMATION_VARIANTS } from "@/styles/animations";
import { StreamSchema } from "@/types/stream.schema";
import { motion } from "framer-motion";
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
      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={SLIDE_RIGHT_ANIMATION_VARIANTS}
      >
        <div className="flex flex-col rounded overflow-hidden">
          <div className="aspect-video bg-background flex-grow">
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
      </motion.div>
    </CarouselItem>
  );
}
