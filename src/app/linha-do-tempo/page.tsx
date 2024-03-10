import {
  Timeline,
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
import { Separator } from "@/components/ui/separator";
import { getStreamer } from "@/data/streamers";
import { TIMELINE } from "@/data/timeline";
import Link from "next/link";
import Markdown from "react-markdown";

export default function TimelinePage() {
  return (
    <main className="py-8 px-12 flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">Linha do tempo FroggSMP</h1>
      <Timeline className="w-full">
        {TIMELINE.map((item, i, arr) => (
          <TimelineItem key={item.server_day}>
            <TimelineItemName>
              <span>
                Dia{" "}
                {item.continuous
                  ? `${item.server_day} ... ${arr[i + 1]?.server_day - 1}`
                  : item.server_day}
              </span>
              <span className="text-sm text-muted-foreground text-right">
                {new Date(`2024-${item.day} 00:00`).toLocaleString("pt-BR", {
                  day: "numeric",
                  month: "numeric",
                }) +
                  (item.continuous
                    ? ` a ${new Date(`2024-${arr[i + 1]?.day}`).toLocaleString(
                        "pt-BR",
                        { day: "numeric", month: "numeric" }
                      )}`
                    : "")}
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

                    return (
                      <AccordionItem
                        key={summary.player}
                        className="flex flex-col"
                        value={summary.player}
                      >
                        <AccordionTrigger className="hover:bg-secondary/5 hover:no-underline px-4">
                          <div className="flex items-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={`https://s.namemc.com/2d/skin/face.png?id=${
                                summary.skin_id ?? streamer?.skin_id
                              }&scale=32`}
                              alt={`Skin de ${streamer?.display_name}`}
                              style={{
                                imageRendering: "pixelated",
                              }}
                              className="h-6 w-6 select-none"
                            />
                            <span className="inline-block ml-2.5">
                              {streamer?.display_name}
                            </span>
                            {summary.vods && (
                              <div className="ml-4 flex gap-4 text-sm">
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
                                      Assistir parte {i + 1} do vod
                                    </Link>
                                  ))}
                              </div>
                            )}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-base px-4">
                          {summary.list.length === 1 && (
                            <Markdown
                              className="whitespace-pre-wrap [&_ul]:whitespace-normal [&>ul_p]:-ml-2 [&>ul]:ml-2 [&_ul]:list-inside [&_ul]:list-[square]"
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
                                    className="whitespace-normal [&_ul]:!list-['-_'] [&_p]:whitespace-pre-wrap bg-book bg-contain bg-no-repeat h-96 pt-7 pb-5 px-8 pr-5 aspect-[146/180]"
                                    style={{ imageRendering: "pixelated" }}
                                  >
                                    <div className="overflow-y-auto h-full space-y-4 scrollbar-book">
                                      {children}
                                    </div>
                                  </blockquote>
                                ),
                              }}
                            >
                              {summary.list[0]}
                            </Markdown>
                          )}
                          {summary.list.length > 1 && (
                            <ul className="list-[square] list-inside pl-[8.5px]">
                              {summary.list.map((item) => (
                                <li key={item}>
                                  <p className="-ml-2 inline-block">{item}</p>
                                </li>
                              ))}
                            </ul>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              )}
            </TimelineItemContent>
          </TimelineItem>
        ))}
      </Timeline>
    </main>
  );
}