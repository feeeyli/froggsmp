/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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

function gerarArray(numDias: number) {
  const array = [];
  let serverDay = 5;

  for (let i = 1; i <= numDias; i++) {
    const day = ("0" + i).slice(-2) + "/01";
    const obj = {
      day: day,
      server_day: serverDay,
      vods: {},
    };
    array.push(obj);
    serverDay++;
  }

  return array;
}

const eventsEmojis = {
  "Episódio de Praia / A Fuga": "🏖️",
  "O Julgamento": "⚖️",
} as const;

function DateTime(props: DayContentProps & { vods: VodSchema[] }) {
  const dateTime = format(props.date, "yyyy-MM-dd");
  const { event } =
    props.vods.find((vod) => vod.day === format(props.date, "dd/MM")) ?? {};

  return (
    <time dateTime={dateTime}>
      {event && eventsEmojis[event as keyof typeof eventsEmojis]}
      {!event && <DayContent {...props} />}
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

  useEffect(() => {
    setVodNumber(0);
  }, [vod]);

  useEffect(() => {
    setVod(undefined);
  }, [day, setVod]);

  const selectedDay = props.vods.find(
    (vod) =>
      new Date(vod.day.split("/").reverse().join("-") + "-2024").getTime() ===
      day?.getTime()
  );

  return (
    <div className="flex flex-col items-center sm:items-start sm:grid grid-cols-[auto_1fr]">
      <div>
        <Calendar
          mode="single"
          selected={day}
          onSelect={setDay}
          fromMonth={new Date(2024, 0)}
          toDate={
            new Date(
              props.vods[props.vods.length - 1].day
                .split("/")
                .reverse()
                .join("-") + "-2024"
            )
          }
          disabled={(day) => {
            return !props.vods.some(
              (vod) =>
                new Date(
                  vod.day.split("/").reverse().join("-") + "-2024 00:00"
                ).getTime() === day.getTime() &&
                Object.keys(vod.vods).length > 0
            );
          }}
          components={{
            DayContent: (p) => DateTime({ ...p, vods: props.vods }),
          }}
          className="rounded-md border"
          month={month}
          onMonthChange={setMonth}
        />
      </div>
      {selectedDay && (
        <div className="flex flex-col items-center gap-4 p-4 relative">
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
            Dia {selectedDay.server_day} - {selectedDay.day}
            {selectedDay.event && (
              <>
                <br />
                <span className="relative text-primary before:bg-background before:px-4 before:absolute before:-inset-x-6 before:bottom-0 before:top-[40%] z-10 before:-z-10">
                  {selectedDay.event}
                </span>
              </>
            )}
          </p>
          {!vod && (
            <ul className="flex flex-wrap max-w-md justify-center gap-2">
              {Object.entries(selectedDay.vods).map(([key, value]) => {
                const streamer = getStreamer(key);

                if (!streamer) return null;

                return (
                  <li key={key} className="flex">
                    <Button
                      variant="link"
                      size="sm"
                      className="h-auto flex-col text-foreground gap-1 py-2 px-2"
                      onClick={() => setVod(key)}
                    >
                      <img
                        src={`https://s.namemc.com/2d/skin/face.png?id=${streamer.skin_id}&scale=32`}
                        alt={`Skin de ${streamer.display_name}`}
                        style={{
                          imageRendering: "pixelated",
                        }}
                        className="h-10 w-10"
                      />
                      <span>{streamer.display_name}</span>
                    </Button>
                  </li>
                );
              })}
            </ul>
          )}
          {vod && selectedDay.vods[vod as keyof typeof selectedDay.vods] && (
            <>
              <VodPlayer
                vod={
                  selectedDay.vods[vod as keyof typeof selectedDay.vods][
                    vodNumber
                  ]
                }
              />
              {selectedDay.vods[vod as keyof typeof selectedDay.vods].length >
                1 && (
                <Pagination>
                  <PaginationContent>
                    {selectedDay.vods[vod as keyof typeof selectedDay.vods].map(
                      (v, i) => (
                        <PaginationItem key={v}>
                          <PaginationLink
                            onClick={() => setVodNumber(i)}
                            className="w-auto px-2 cursor-pointer"
                            isActive={i === vodNumber}
                          >
                            Parte {i + 1}
                          </PaginationLink>
                        </PaginationItem>
                      )
                    )}
                  </PaginationContent>
                </Pagination>
              )}
            </>
          )}
        </div>
      )}
      {!selectedDay && (
        <div className="flex items-center justify-center p-4">
          <p className="text-lg text-center">Nenhum dia selecionado</p>
        </div>
      )}
    </div>
  );
}
