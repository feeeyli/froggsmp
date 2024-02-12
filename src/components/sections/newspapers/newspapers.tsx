import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { NewspaperSchema } from "@/types/newspaper.schema";
import Link from "next/link";
import { Suspense } from "react";
import { Newspaper } from "./newspaper";
import { PageDialog } from "./page-dialog";

type NewspapersProps = {
  newspapers: NewspaperSchema[];
};

export function Newspapers(props: NewspapersProps) {
  return (
    <section className="py-8 px-4 sm:px-8 md:px-20 lg:px-40 flex flex-col gap-6 bg-secondary/10">
      <h2
        className="text-3xl font-semibold flex items-center gap-x-6 gap-y-3 flex-wrap"
        id="correio"
      >
        Correio Froggiano{" "}
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
          {props.newspapers.map((up) => (
            <Newspaper key={up.edition} newspaper={up} />
          ))}
        </CarouselContent>
        <CarouselNext className="-right-1 sm:right-4 disabled:hidden" />
        <CarouselPrevious className="-left-1 sm:left-4 disabled:hidden" />
      </Carousel>
      <Suspense>
        <PageDialog newspapers={props.newspapers} />
      </Suspense>
    </section>
  );
}
