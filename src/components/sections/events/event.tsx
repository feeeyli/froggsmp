"use client";

import {
  TimelineItem,
  TimelineItemContent,
  TimelineItemIndicator,
  TimelineItemName,
} from "@/components/timeline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { EVENTS } from "@/data/events";
import { FADE_LEFT_ANIMATION_VARIANTS } from "@/styles/animations";
import { EventSchema } from "@/types/event.schema";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Announcement } from "./announcement";
import { WatchEvent } from "./watch-event";

const getServerDay = (date: Date) => {
  const e = new Date(date),
    f = new Date("2024-01-08"),
    g = Math.abs(f.getTime() - e.getTime()),
    h = Math.ceil(g / (1e3 * 3600 * 24));
  return h;
};

type EventProps = {
  event: EventSchema;
  index: number;
};

export function Event({ event, index: i }: EventProps) {
  const hasPassed = new Date(event.time).getTime() < Date.now();
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={FADE_LEFT_ANIMATION_VARIANTS}
    >
      <TimelineItem className="grid-cols-[3.5rem_0.75rem_1fr]">
        <TimelineItemName className="relative">
          <span>Dia {getServerDay(new Date(event.time))}</span>
          <span className="text-sm text-muted-foreground text-right">
            {new Date(event.time).toLocaleString("pt-BR", {
              day: "numeric",
              month: "numeric",
            })}
          </span>
        </TimelineItemName>
        <TimelineItemIndicator className="grid-rows-[1.40625rem_0.75rem_1fr] md:grid-rows-[1.40625rem_0.75rem_1fr]">
          <span className="h-3 w-3 flex items-center justify-center text-sm">
            {EVENTS[event.slug as keyof typeof EVENTS].emoji}
          </span>
        </TimelineItemIndicator>
        <TimelineItemContent className="py-0 md:py-0 overflow-x-hidden">
          <Accordion
            type="multiple"
            defaultValue={i === 0 ? ["item"] : undefined}
          >
            <AccordionItem value="item">
              <AccordionTrigger className="hover:bg-secondary/5 hover:no-underline px-4">
                <div className="flex items-center justify-center sm:justify-normal gap-x-4 flex-wrap flex-1 relative">
                  {i === 0 && !hasPassed && (
                    <Badge className="px-0.5 absolute left-0 sm:relative">
                      <Clock size="0.75rem" />
                    </Badge>
                  )}
                  {event.name} {hasPassed && <WatchEvent event={event} />}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Carousel
                  className="w-full cursor-move active:cursor-grabbing"
                  opts={{
                    align: "start",
                    dragFree: true,
                  }}
                >
                  <CarouselContent>
                    {event.announcements.map((ann) => (
                      <Announcement key={ann.pictures[0]} announcement={ann} />
                    ))}
                  </CarouselContent>
                  <CarouselNext className="right-2 sm:right-4 disabled:hidden" />
                  <CarouselPrevious className="left-2 sm:left-4 disabled:hidden" />
                </Carousel>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TimelineItemContent>
      </TimelineItem>
    </motion.div>
  );
}
