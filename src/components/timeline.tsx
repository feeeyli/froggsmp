import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type TimelineItemNameProps = ComponentProps<"div">;

const TimelineItemName = (props: TimelineItemNameProps) => {
  return (
    <div
      {...props}
      className={cn("flex flex-col items-end mt-5 md:mt-2", props.className)}
    ></div>
  );
};

type TimelineItemIndicatorProps = ComponentProps<"div">;

const TimelineItemIndicator = (props: TimelineItemIndicatorProps) => {
  return (
    <div
      {...props}
      className={cn("flex flex-col items-center gap-1.5", props.className)}
    >
      <span className="w-0.5 h-5 md:h-2 bg-border"></span>
      <span className="w-full aspect-square rounded-full bg-background border-[3px] border-primary"></span>
      <span className="w-0.5 flex-1 bg-border"></span>
    </div>
  );
};

type TimelineItemContentProps = ComponentProps<"div">;

const TimelineItemContent = (props: TimelineItemContentProps) => {
  return (
    <div
      {...props}
      className={cn("pb-2 pt-5 md:pt-2 flex flex-col", props.className)}
    ></div>
  );
};

type TimelineItemProps = ComponentProps<"li">;

const TimelineItem = (props: TimelineItemProps) => {
  return (
    <li
      {...props}
      className={cn(
        "grid grid-cols-[3rem_0.75rem_1fr] gap-3 md:gap-6",
        props.className
      )}
    ></li>
  );
};

type TimelineProps = React.HTMLAttributes<HTMLUListElement>;

const Timeline = (props: TimelineProps) => {
  return <ul {...props} className={cn("flex flex-col", props.className)}></ul>;
};

export {
  Timeline,
  TimelineItem,
  TimelineItemContent,
  TimelineItemIndicator,
  TimelineItemName,
};
