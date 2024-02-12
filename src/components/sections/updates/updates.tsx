import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { UpdateSchema } from "@/types/update.schema";
import Link from "next/link";
import { Announcement } from "../events/announcement";

type UpdatesProps = {
  updates: UpdateSchema[];
};

export function Updates(props: UpdatesProps) {
  return (
    <section className="py-8 px-4 sm:px-8 md:px-20 lg:px-40 flex flex-col gap-6">
      <h2
        className="text-3xl font-semibold flex items-center gap-x-6 gap-y-3 flex-wrap"
        id="atualizacoes"
      >
        Atualizações diárias{" "}
        <Link
          href="https://twitter.com/froggsmpnots"
          target="_blank"
          className="text-primary text-base hover:underline"
        >
          por @froggsmpnots
        </Link>
      </h2>
      <Carousel
        className="w-full cursor-move active:cursor-grabbing group"
        data-invert-bg
        opts={{
          align: "start",
          dragFree: true,
        }}
      >
        <CarouselContent>
          {props.updates.map((up) => (
            <Announcement
              key={up.pictures[0]}
              announcement={{
                publisher: "FroggUpdates",
                thread: true,
                ...up,
              }}
            >
              <span className="text-center block mb-2 text-lg">
                {new Date(up.date + " 00:00:00").toLocaleString("pt-BR", {
                  day: "numeric",
                  month: "long",
                })}
              </span>
            </Announcement>
          ))}
        </CarouselContent>
        <CarouselNext className="-right-1 sm:right-4 disabled:hidden" />
        <CarouselPrevious className="-left-1 sm:left-4 disabled:hidden" />
      </Carousel>
    </section>
  );
}
