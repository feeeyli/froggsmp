import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TabsContent } from "@/components/ui/tabs";
import { EventSchema } from "@/types/event.schema";
import { Announcement } from "./announcement";
import { WatchEvent } from "./watch-event";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

type EventProps = {
  event: EventSchema;
};

export function Event(props: EventProps) {
  const time = props.event.time.replace("+00:00", "+03:00");

  return (
    <TabsContent value={props.event.slug} className="py-4">
      <header className="flex flex-col items-center">
        <h3 className="text-2xl font-semibold">{props.event.name}</h3>
        <p className="text-lg relative text-primary before:bg-background before:px-4 before:absolute before:-inset-x-6 before:bottom-0 before:top-[40%] z-10 before:-z-10">
          {capitalizeFirstLetter(
            new Date(time).toLocaleString("pt-BR", {
              weekday: "long",
            })
          )}
          {", "}
          {new Date(time).toLocaleString("pt-BR", {
            day: "numeric",
            month: "numeric",
          })}
          {" - "}
          {new Date(time).toLocaleString("pt-BR", {
            hour: "numeric",
            minute: "numeric",
          })}
        </p>
        <WatchEvent event={props.event} />
      </header>
      <Carousel
        className="w-full cursor-move active:cursor-grabbing mt-6"
        opts={{
          align: "start",
          dragFree: true,
        }}
      >
        <CarouselContent>
          {props.event.announcements.map((ann) => (
            <Announcement key={ann.pictures[0]} announcement={ann} />
          ))}
        </CarouselContent>
        <CarouselNext className="-right-1 sm:right-4 lg:-right-12 disabled:hidden" />
        <CarouselPrevious className="-left-1 sm:left-4 lg:-left-12 disabled:hidden" />
      </Carousel>
    </TabsContent>
  );
}
