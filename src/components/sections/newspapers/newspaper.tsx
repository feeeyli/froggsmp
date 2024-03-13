/* eslint-disable @next/next/no-img-element */
import { CarouselItem } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { NewspaperSchema } from "@/types/newspaper.schema";
import Link from "next/link";
import { Suspense } from "react";
import Markdown from "react-markdown";
import { Page } from "./page";
import { PageTrigger } from "./page-trigger";

function subtractDays(date: Date, days: number) {
  const added = new Date(date);

  added.setTime(added.getTime() - days * 1000 * 60 * 60 * 24);

  return added;
}

type NewspaperProps = {
  newspaper: NewspaperSchema;
};

export function Newspaper(props: NewspaperProps) {
  return (
    <CarouselItem className="basis-full sm:basis-[30rem]">
      <article className="flex max-w-[30rem] flex-col gap-3 rounded-md border border-border px-4 py-3 text-foreground scrollbar bg-background">
        <Markdown
          className="text-center [&_h1]:text-xl"
          components={{
            em({ children }) {
              return (
                <span
                  // href={
                  //   "https://twitter.com/hashtag/" + String(children).slice(1)
                  // }
                  // target="_blank"
                  className="text-primary"
                >
                  {children}
                </span>
              );
            },
          }}
        >
          {`# Edição *#${props.newspaper.edition}* \nDe ${subtractDays(
            new Date(props.newspaper.day + " 00:00"),
            7
          ).toLocaleDateString("pt-BR", {
            day: "numeric",
            month: "short",
          })} a ${new Date(props.newspaper.day + " 00:00").toLocaleDateString(
            "pt-BR",
            {
              day: "numeric",
              month: "short",
            }
          )}.`}
        </Markdown>
        {props.newspaper.pages.length > 0 && (
          <section className="grid w-full grid-cols-2 gap-2 relative">
            {props.newspaper.pages.map((page, index) => (
              <Page key={page.picture} page={page} />
            ))}
            <Suspense>
              <PageTrigger day={props.newspaper.edition} />
            </Suspense>
          </section>
        )}
        <p className="text-sm text-center opacity-80">
          Clique em uma pagina para vê-la
        </p>
        <Separator className="opacity-50" />
        <Link
          className="text-sm text-center hover:underline text-primary font-pixel"
          target="_blank"
          href={props.newspaper.link}
        >
          Ver post original
        </Link>
      </article>
    </CarouselItem>
  );
}
