"use client";

import { Typing } from "@/components/animations/typing";
import {
  TimelineItem,
  TimelineItemContent,
  TimelineItemIndicator,
  TimelineItemName,
  Timeline as TimelineRoot,
} from "@/components/timeline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { getStreamer } from "@/data/streamers";
import { TIMELINE } from "@/data/timeline";
import { FADE_LEFT_ANIMATION_VARIANTS } from "@/styles/animations";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

export function Timeline() {
  const item = TIMELINE.at(-1);

  return (
    <section className="py-8 px-4 sm:px-8 md:px-20 lg:px-40 flex flex-col gap-6">
      <Typing
        as="h2"
        className="text-3xl font-semibold flex items-center gap-x-6 gap-y-3 flex-wrap"
        id="linha-do-tempo"
      >
        Linha do Tempo
      </Typing>
      <TimelineRoot className="w-full">
        <TimelineItem>
          <TimelineItemName className="text-foreground/40">
            [...]
          </TimelineItemName>
          <TimelineItemIndicator className="even:[&_span]:bg-primary/40 even:[&_span]:border-0 even:[&_span]:w-1.5" />
        </TimelineItem>
        {item && (
          <TimelineItem key={item.server_day}>
            <TimelineItemName>
              <span>
                Dia{" "}
                {item.continuous ? `${item.server_day} ...` : item.server_day}
              </span>
              <span className="text-sm text-muted-foreground text-right">
                {new Date(`2024-${item.day} 00:00`).toLocaleString("pt-BR", {
                  day: "numeric",
                  month: "numeric",
                }) + (item.continuous ? " a ..." : "")}
              </span>
            </TimelineItemName>
            <TimelineItemIndicator />
            <TimelineItemContent className="gap-2">
              {item.general_summary && (
                <p className="whitespace-pre-wrap pb-3">
                  {item.general_summary}
                </p>
              )}
              {item.summaries && (
                <Accordion type="multiple">
                  {item.summaries.map((summary) => {
                    const streamer = getStreamer(summary.player);
                    const skin_id = summary.skin_id || streamer?.skin_id;

                    return (
                      <AccordionItem
                        key={summary.player}
                        className="flex flex-col"
                        value={summary.player}
                        asChild
                      >
                        <motion.div
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true }}
                          variants={FADE_LEFT_ANIMATION_VARIANTS}
                        >
                          <AccordionTrigger className="hover:bg-secondary/5 hover:no-underline px-4">
                            <div className="flex items-center flex-wrap gap-4">
                              <div className="flex items-center">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={
                                    skin_id
                                      ? `https://s.namemc.com/2d/skin/face.png?id=${skin_id}&scale=32`
                                      : `https://crafatar.com/avatars/${streamer?.minecraft_uuid}?overlay`
                                  }
                                  alt={`Skin de ${streamer?.display_name}`}
                                  style={{
                                    imageRendering: "pixelated",
                                  }}
                                  className="h-6 w-6 select-none"
                                />
                                <span className="inline-block ml-2.5">
                                  {streamer?.display_name}
                                </span>
                              </div>
                              {summary.vods && (
                                <div className="flex gap-4 text-sm">
                                  {summary.vods.length === 1 && (
                                    <Link
                                      href={summary.vods[0]}
                                      className="text-primary hover:underline"
                                    >
                                      Assistir vod
                                    </Link>
                                  )}
                                  {summary.vods.length > 1 &&
                                    summary.vods?.map((vod, i) => (
                                      <Link
                                        key={vod}
                                        href={vod}
                                        className="text-primary hover:underline"
                                      >
                                        Assistir parte {i + 1}
                                      </Link>
                                    ))}
                                </div>
                              )}
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="text-base py-2 px-4 grid grid-cols-[1fr_1rem] items-start gap-2">
                            {summary.list.length <= 1 && (
                              <Markdown
                                className="font-sans whitespace-pre-wrap [&_ul]:whitespace-normal [&>ul_p]:-ml-2 [&>ul]:ml-2 [&_ul]:list-inside [&_ul]:list-[square]"
                                components={{
                                  li: ({ children }) => (
                                    <li>
                                      <p className="inline">{children}</p>
                                    </li>
                                  ),
                                  hr: () => (
                                    <Separator
                                      orientation="horizontal"
                                      className="bg-foreground/50 mx-auto w-[95%]"
                                    />
                                  ),
                                  blockquote: ({ children }) => (
                                    <blockquote
                                      className="whitespace-normal [&_ul]:!list-['-_'] [&_p]:whitespace-pre-wrap bg-book bg-contain bg-no-repeat h-72 md:h-96 pt-[1.875rem] pb-5 px-8 pr-5 aspect-[146/180]"
                                      style={{ imageRendering: "pixelated" }}
                                    >
                                      <div className="overflow-y-auto h-full space-y-4 scrollbar-book font-pixel">
                                        {children}
                                      </div>
                                    </blockquote>
                                  ),
                                  img: ({ node, ...props }) => (
                                    <Link
                                      href={props.src ?? "#"}
                                      target="_blank"
                                      className="inline-block"
                                    >
                                      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                                      <img {...props} className="w-56" />
                                    </Link>
                                  ),
                                  code: ({ children }) => (
                                    <p className="chat bg-foreground/50 text-background px-3 py-1 font-pixel flex flex-col gap-1">
                                      {children
                                        ?.toString()
                                        .split("\n\n")
                                        .map((text, i) => (
                                          <span key={i} className="block">
                                            <small className="text-xs inline-block mr-2 cursor-default select-none">
                                              {">"}
                                            </small>
                                            {text}
                                          </span>
                                        ))}
                                    </p>
                                  ),
                                  pre: ({ children }) => <>{children}</>,
                                  ol: ({ children }) => (
                                    <ol className="whitespace-normal list-decimal list-inside flex flex-col gap-4 marker:font-pixel marker:font-bold [&_.chat]:ml-[1.25rem] [&_.chat]:mt-2 pl-2">
                                      {children}
                                    </ol>
                                  ),
                                }}
                              >
                                {summary.list[0] ?? "*[Em progresso]*"}
                              </Markdown>
                            )}
                            {summary.list.length > 1 && (
                              <ul className="list-[square] list-inside pl-[8.5px] font-sans">
                                {summary.list.map((item) => (
                                  <li key={item}>
                                    <p className="-ml-2 inline-block">{item}</p>
                                  </li>
                                ))}
                              </ul>
                            )}
                            {summary.credit_summary && (
                              <Popover>
                                <PopoverTrigger className="text-primary">
                                  <HelpCircle size="1rem" />
                                </PopoverTrigger>
                                <PopoverContent
                                  className="px-3 py-1.5 text-sm w-auto"
                                  side="top"
                                >
                                  resumo {summary.list.length === 0 && "sendo "}
                                  feito por{" "}
                                  <Link
                                    href={`https://twitter.com/${summary.credit_summary}`}
                                    target="_blank"
                                    className="text-primary hover:underline font-sans"
                                  >
                                    @{summary.credit_summary}
                                  </Link>
                                </PopoverContent>
                              </Popover>
                            )}
                          </AccordionContent>
                        </motion.div>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              )}
            </TimelineItemContent>
          </TimelineItem>
        )}
      </TimelineRoot>
      <Button variant="link" className="mx-auto" asChild>
        <Link href="/linha-do-tempo">Ver linha do tempo completa</Link>
      </Button>
    </section>
  );
}
