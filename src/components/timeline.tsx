import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type TimelineItemNameProps = ComponentProps<"div">;

const TimelineItemName = (props: TimelineItemNameProps) => {
  return (
    <div
      {...props}
      className={cn("flex flex-col items-end mt-2", props.className)}
    ></div>
  );
};

const TimelineItemIndicator = () => {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span className="w-0.5 h-2 bg-border"></span>
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
      className={cn("mt-2 pb-8 flex flex-col", props.className)}
    ></div>
  );
};

type TimelineItemProps = {
  children: React.ReactNode;
};

const TimelineItem = (props: TimelineItemProps) => {
  return (
    <li className="grid grid-cols-[5rem_0.75rem_1fr] gap-6">
      {props.children}
    </li>
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
