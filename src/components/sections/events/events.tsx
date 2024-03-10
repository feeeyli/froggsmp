import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EventSchema } from "@/types/event.schema";
import { Clock } from "lucide-react";
import { Suspense } from "react";
import { Event } from "./event";
import { NextEventCountdown } from "./next-event-countdown";

function addHours(date: Date, hours: number) {
  const added = new Date(date);

  added.setHours(added.getHours() + hours);

  return added;
}

type EventsProps = {
  events: EventSchema[];
};

export function Events(props: EventsProps) {
  const hasFuture =
    new Date().getTime() <
    addHours(new Date(props.events[0].time), 2).getTime();

  return (
    <section className="py-8 px-4 sm:px-8 md:px-20 lg:px-40 flex flex-col gap-6 justify-center">
      <h2 className="text-3xl font-semibold" id="eventos">
        Eventos
      </h2>
      {hasFuture && (
        <Suspense>
          <NextEventCountdown event={props.events[0]} />
        </Suspense>
      )}
      <Tabs defaultValue={props.events[0].slug} className="w-full">
        <TabsList className="bg-primary/10 gap-1 flex-wrap h-auto w-full">
          {props.events.map((event, index) => {
            const hasPassed = new Date(event.time).getTime() < Date.now();

            return (
              <TabsTrigger
                key={event.name}
                value={event.slug}
                className="text-foreground font-semibold relative group"
              >
                {index === 0 && !hasPassed && (
                  <Badge className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 px-0.5">
                    <Clock size="0.75rem" />
                  </Badge>
                )}
                <p className="group-data-[has-passed=true]:line-through flex gap-2 text-base items-center">
                  {event.name}
                  <span className="text-primary group-data-[has-passed=true]:line-through">
                    {new Date(event.time).toLocaleString("pt-BR", {
                      day: "numeric",
                      month: "numeric",
                    })}
                  </span>
                </p>
              </TabsTrigger>
            );
          })}
        </TabsList>
        {props.events.map((event) => (
          <Event key={event.name} event={event} />
        ))}
      </Tabs>
    </section>
  );
}
