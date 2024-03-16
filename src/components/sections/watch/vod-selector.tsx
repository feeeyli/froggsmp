/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { STREAMERS } from "@/data/streamers";
import { VodSchema } from "@/types/vod.schema";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { DayContent, DayContentProps } from "react-day-picker";
import { create } from "zustand";
import { VodPlayer } from "./vod-player";

function getStreamer(twitch_login: string) {
  return STREAMERS.find((streamer) => streamer.twitch_login === twitch_login);
}

const Events = {
  julgamento: {
    name: "Julgamento",
    emoji: "⚖️",
  },
  "episodio-de-praia": {
    name: "Episódio de Praia",
    emoji: "🏖️",
  },
  "a-fuga": {
    name: "A Fuga",
    emoji: "⛓️",
  },
  "valentines-day": {
    name: "Valentine's Day",
    emoji: "💘",
  },
  "zoologico-frogg": {
    name: "Zoologico Frogg",
    emoji: "🦒",
  },
  "a-missa": {
    name: "A Missa",
    emoji: "🙏",
  },
  "o-milagre": {
    name: "O Milagre",
    emoji: "😇",
  },
} as const;

function DateTime(
  props: DayContentProps & { vods: VodSchema[]; showServerDay: boolean }
) {
  const dateTime = format(props.date, "yyyy-MM-dd");
  const day = props.vods.find((vod) => {
    return vod.day === props.date.toISOString().split("T")[0];
  });

  return (
    <time dateTime={dateTime}>
      {day?.events[0] && Events[day.events[0] as keyof typeof Events].emoji}
      {!day?.events[0] && (
        <>
          {!props.showServerDay && <DayContent {...props} />}
          {props.showServerDay && (day?.server_day ?? "")}
        </>
      )}
    </time>
  );
}

export const useVodStore = create<{
  day?: Date | undefined;
  month?: Date | undefined;
  vod?: string;
  setDay: (value: Date | undefined) => void;
  setMonth: (value: Date | undefined) => void;
  setVod: (value: string | undefined) => void;
}>((set) => ({
  day: new Date(2024, 0, 8),
  setDay: (value) => set({ day: value }),
  month: new Date(2024, 0, 8),
  setMonth: (value) => set({ month: value }),
  vod: undefined,
  setVod: (value) => set({ vod: value }),
}));

type VodSelectorProps = {
  vods: VodSchema[];
};

export function VodSelector(props: VodSelectorProps) {
  const { day, setDay, vod, setVod, month, setMonth } = useVodStore(
    (state) => state
  );

  const [vodNumber, setVodNumber] = useState(0);
  const [showServerDay, setShowServerDay] = useState(false);

  useEffect(() => {
    setVodNumber(0);
  }, [vod]);

  useEffect(() => {
    setVod(undefined);
  }, [day, setVod]);

  const selectedDay = props.vods.find(
    (vod) => vod.day === day?.toISOString().split("T")[0]
  );

  const enabledDays = props.vods
    .filter((vod) => vod.vods.length > 0)
    .map((day) => day.day);

  return (
    <div className="flex flex-col items-center sm:items-start sm:grid gap-4 grid-cols-[auto_1fr]">
      <div className="flex flex-col items-center gap-4">
        <Calendar
          mode="single"
          selected={day}
          onSelect={setDay}
          fromDate={new Date(props.vods[0].day)}
          toMonth={new Date(props.vods[props.vods.length - 1].day)}
          disabled={(day) => {
            return !enabledDays.includes(day.toISOString().split("T")[0]);
          }}
          components={{
            DayContent: (p) =>
              DateTime({ ...p, vods: props.vods, showServerDay }),
          }}
          className="rounded-md border bg-background"
          showOutsideDays={false}
          month={month}
          onMonthChange={setMonth}
        />
        <div className="flex items-center space-x-2">
          <Checkbox
            id="show-server-day"
            checked={showServerDay}
            onCheckedChange={(checked) =>
              checked !== "indeterminate" && setShowServerDay(checked)
            }
          />
          <label
            htmlFor="show-server-day"
            className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Mostrar dias do servidor
          </label>
        </div>
      </div>
      {selectedDay && (
        <div className="flex flex-col items-center w-full gap-4 py-4 relative">
          {vod && (
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 absolute top-4 left-4"
              onClick={() => setVod(undefined)}
            >
              <ArrowLeft size="1rem" />
            </Button>
          )}
          <p className="text-lg text-center">
            Dia {selectedDay.server_day} -{" "}
            {new Date(selectedDay.day + " 00:00").toLocaleString("pt-BR", {
              day: "numeric",
              month: "numeric",
            })}
            {selectedDay.events.length > 0 && (
              <>
                <br />
                <span className="relative text-primary before:bg-primary/5 before:px-4 before:absolute before:-inset-x-6 before:bottom-0 before:top-[50%] z-10 before:-z-10">
                  {selectedDay.events
                    .map((event) => Events[event as keyof typeof Events].name)
                    .join(" / ")}
                </span>
              </>
            )}
          </p>
          {!vod && (
            <>
              <ul className="flex flex-wrap max-w-md justify-center gap-2">
                {selectedDay.vods.map((vod) => {
                  const streamer = getStreamer(vod.streamer);

                  if (!streamer) return null;

                  return (
                    <li key={vod.streamer} className="flex">
                      <Button
                        variant="link"
                        size="sm"
                        className="h-auto flex-col text-foreground gap-1 py-2 px-2"
                        onClick={() => setVod(vod.streamer)}
                      >
                        <img
                          src={
                            streamer.skin_id
                              ? `https://s.namemc.com/2d/skin/face.png?id=${streamer.skin_id}&scale=32`
                              : `https://crafatar.com/renders/head/${streamer.minecraft_uuid}?overlay`
                          }
                          alt={`Skin de ${streamer.display_name}`}
                          className="h-12"
                        />
                        <span>{streamer.display_name}</span>
                      </Button>
                    </li>
                  );
                })}
              </ul>
              <p className="text-sm opacity-80">
                Clique em um streamer para assistir ao VOD
              </p>
            </>
          )}
          {vod && selectedDay.vods.find((v) => v.streamer === vod)?.vods && (
            <>
              <VodPlayer
                vod={selectedDay.vods
                  .find((v) => v.streamer === vod)!
                  .vods[vodNumber].replace("https://www.twitch.tv/videos/", "")}
              />
              {selectedDay.vods.find((v) => v.streamer === vod)!.vods.length >
                1 && (
                <Pagination>
                  <PaginationContent>
                    {selectedDay.vods
                      .find((v) => v.streamer === vod)!
                      .vods.map((v, i) => (
                        <PaginationItem key={v}>
                          <PaginationLink
                            onClick={() => setVodNumber(i)}
                            className="w-auto px-2 cursor-pointer"
                            isActive={i === vodNumber}
                          >
                            Parte {i + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                  </PaginationContent>
                </Pagination>
              )}
            </>
          )}
        </div>
      )}
      {!selectedDay && (
        <div className="flex items-center justify-center w-full py-4">
          <p className="text-lg text-center">Nenhum dia selecionado</p>
        </div>
      )}
      {vod}
    </div>
  );
}
