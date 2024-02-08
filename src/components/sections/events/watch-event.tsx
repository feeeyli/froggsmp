"use client";

import { Button } from "@/components/ui/button";
import { EventSchema } from "@/types/event.schema";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { useVodStore } from "../watch/vod-selector";

type WatchEventProps = {
  event: EventSchema;
};

export function WatchEvent(props: WatchEventProps) {
  const { setDay, setMonth } = useVodStore((state) => state);

  return (
    <Button
      size="sm"
      variant="link"
      onClick={() => {
        setDay(new Date(props.event.time.split("T")[0] + " 00:00"));
        setMonth(new Date(props.event.time.split("T")[0] + " 00:00"));
      }}
      asChild
    >
      <Link href="#assistir">
        Assistir VODs do evento <ArrowDown size="0.75rem" className="ml-2" />
      </Link>
    </Button>
  );
}
