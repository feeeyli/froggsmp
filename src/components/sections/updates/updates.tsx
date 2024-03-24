import { Typing } from "@/components/animations/typing";
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
      <div className="flex flex-col items-start">
        <Typing
          as="h2"
          className="text-3xl font-semibold flex items-center gap-x-6 gap-y-3 flex-wrap"
          id="atualizacoes"
        >
          Atualizações diárias
        </Typing>
        <Link
          href="https://twitter.com/froggsmpnots"
          target="_blank"
          className="text-primary text-base hover:underline"
        >
          <Typing as="span">por @froggsmpnots</Typing>
        </Link>
      </div>
      <Carousel
        className="w-full cursor-move active:cursor-grabbing group"
        data-invert-bg
        opts={{
          align: "start",
          dragFree: true,
        }}
      >
        <CarouselContent>
          {props.updates.map((up, i) => (
            <Announcement
              key={up.date}
              announcement={{
                publisher: "FroggUpdates",
                thread: true,
                pictures: [up.picture],
                text: `🔔| FROGG SMP ATUALIZAÇÃO\n\`DIA ${up.date
                  .split("-")
                  .reverse()
                  .join(".")}\`\n\n*#FroggSMP* *#FSMP*`,
                ...up,
              }}
              index={i}
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
