/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Toggle } from "@/components/ui/toggle";
import { NewspaperSchema } from "@/types/newspaper.schema";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";
import Link from "next/link";
import { useQueryState } from "nuqs";
import { useState } from "react";
import Markdown from "react-markdown";

const charactersNames = {
  bastet: "bastet",
  jinki: "jinkiwinkki",
  akino: "oakinoo",
  tiba: "tiba041",
  tibba: "tiba041",
  ameizim: "ameizim",
  scott: "scottonauta",
  abaddon: "scottonauta",
  rafly: "imrafly",
  pierre: "umildlive",
  umild: "umildlive",
  kojj: "kojjlul",
  yumi: "yuyusaz",
  áries: "fehdubs",
  flopi: "flopi",
  carras: "carrasquera",
  carrasquera: "carrasquera",
  ljoga: "ljoga",
  myn: "mynluvsx",
  dr_rodrigo: "umildlive",
  kaaory: "kaaory",
  febatista: "febatista",
  roberto: "umildlive",
  keller: "kellerzons"
};

const transcriptVariants = cva(
  "absolute inset-0 bg-background/95 transcript-markdown whitespace-pre-line p-6 pb-10 overflow-y-auto scrollbar transition-opacity",
  {
    variants: {
      show: {
        true: "opacity-100",
        false: "opacity-0 pointer-events-none",
      },
    },
  }
);

type PageDialogProps = {
  newspapers: NewspaperSchema[];
};

export function PageDialog(props: PageDialogProps) {
  const [page, setPage] = useQueryState("jornal");
  const [showTranscript, setShowTranscript] = useState<number[]>([]);

  const editionDay = page ? "2024-" + page : undefined;

  const edition = props.newspapers.find((newspaper) => {
    if (!page) return undefined;

    return /\d\d-\d\d/.test(page)
      ? newspaper.day === editionDay
      : newspaper.edition === Number(page);
  });

  const open = !!editionDay && !!edition;

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        if (!o) setPage(null);
        setShowTranscript([]);
      }}
    >
      <DialogContent className="max-w-none h-[80%] sm:h-auto md:h-[80%] lg:h-[90%] xl:h-[95%] aspect-[1414/2000] sm:aspect-[2828/2000] sm:w-[90%] md:w-auto bg-transparent border-0 p-0 scrollbar">
        <Carousel
          className="w-full cursor-move active:cursor-grabbing group"
          data-invert-bg
          opts={{
            align: "start",
            dragFree: true,
          }}
        >
          <CarouselContent className="ml-0 divide-x divide-black">
            {edition?.pages.map((page, i) => (
              <CarouselItem
                key={page.picture}
                className="basis-[100%] sm:basis-1/2 aspect-[0.707] pl-0 relative"
              >
                <img
                  src={page.picture}
                  height={2000}
                  width={1414}
                  alt="Pagina"
                  className="h-full w-full"
                />
                <Markdown
                  className={transcriptVariants({
                    show: showTranscript.includes(i),
                  })}
                  components={{
                    em({ children }) {
                      return (
                        <Link
                          href={`${process.env.NEXT_PUBLIC_BASE_API_URL}#${
                            charactersNames[
                              String(children)
                                .split("!")[1]
                                .replace(".", "")
                                .replace(" ", "_")
                                .toLocaleLowerCase() as keyof typeof charactersNames
                            ]
                          }`}
                          onClick={() => setPage(null)}
                          className="text-primary hover:underline"
                        >
                          {children}
                        </Link>
                      );
                    },
                  }}
                >
                  {page.transcript.replaceAll(/F!(\w+\.\s\w+|\w+)/g, "*$&*")}
                </Markdown>
                <Toggle
                  // size="icon"
                  pressed={showTranscript.includes(i)}
                  onPressedChange={(pressed) =>
                    setShowTranscript((old) =>
                      pressed ? [...old, i] : old.filter((n) => n !== i)
                    )
                  }
                  className="absolute left-2 bottom-2 bg-background justify-start text-secondary-foreground hover:bg-background/80 h-9 p-2 pl-0 hover:text-foreground overflow-hidden gap-2"
                  asChild
                >
                  <motion.button
                    initial={{
                      width: "16rem",
                    }}
                    animate={{
                      width: "2.25rem",
                    }}
                    transition={{
                      delay: 2.5,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="min-w-[2.25rem] min-h-[2.25rem] flex items-center justify-center">
                      <Newspaper size="1rem" className="min-w-[1rem]" />
                    </div>
                    <motion.span
                      animate={{
                        opacity: 0,
                      }}
                      style={{
                        textWrap: "nowrap",
                      }}
                      transition={{
                        delay: 2.5,
                      }}
                    >
                      Clique para ler a transcrição
                    </motion.span>
                  </motion.button>
                </Toggle>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="right-2 disabled:hidden sm:-right-10" />
          <CarouselPrevious className="left-2 disabled:hidden sm:-left-10" />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
