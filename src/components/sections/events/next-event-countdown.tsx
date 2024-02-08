"use client";

import { EventSchema } from "@/types/event.schema";
import { useTimer } from "react-timer-hook";

type NextEventCountdownProps = {
  event: EventSchema;
};

export function NextEventCountdown(props: NextEventCountdownProps) {
  const { days, minutes, hours, seconds, isRunning } = useTimer({
    expiryTimestamp: new Date(props.event.time),
  });

  return (
    <div className="flex flex-col items-center -mb-6">
      <span>Proximo evento em:</span>
      <time
        className="mb-2 text-3xl font-bold text-primary"
        suppressHydrationWarning
      >
        {isRunning && (
          <>
            {days > 0 && days + "d"} {hours}h {minutes}m {seconds}s
          </>
        )}
        {!isRunning && (
          <span className="text-[#22c55e]">O evento já começou</span>
        )}
      </time>
    </div>
  );
}
