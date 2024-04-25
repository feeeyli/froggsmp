import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import { ComponentProps } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";

type TreeProps = {} & ComponentProps<"div">;

export function Tree(props: TreeProps) {
  return (
    <div
      className={cn("flex flex-col gap-4 max-sm:w-full", props.className)}
      {...props}
    ></div>
  );
}

type TreeItemProps = {} & ComponentProps<typeof Collapsible>;

export function TreeItem(props: TreeItemProps) {
  return (
    <Collapsible
      defaultOpen
      className={cn(
        "flex flex-col gap-1 items-start group/item",
        props.className
      )}
      {...props}
    ></Collapsible>
  );
}

type TreeItemTitleProps = {} & ComponentProps<typeof CollapsibleTrigger>;

export function TreeItemTitle({ children, ...props }: TreeItemTitleProps) {
  return (
    <CollapsibleTrigger
      className={cn("flex group/trigger", props.className)}
      {...props}
    >
      <div className="p-2">
        <ChevronUp
          size="1rem"
          className="text-primary group-data-[state=open]/item:rotate-180"
        />
      </div>
      <span className="h-8 px-3 flex items-center transition-colors group-hover/trigger:bg-primary/10">
        {children}
      </span>
    </CollapsibleTrigger>
  );
}

type TreeSubItemsProps = {} & ComponentProps<typeof CollapsibleContent>;

export function TreeSubItems(props: TreeSubItemsProps) {
  return <CollapsibleContent {...props}></CollapsibleContent>;
}

type TreeSubItemProps = {} & ComponentProps<typeof Link>;

export function TreeSubItem({
  children,
  className,
  ...props
}: TreeSubItemProps) {
  return (
    <div className="flex gap-1.5 group/sub">
      <div className="h-8 w-6 grid grid-cols-[1rem_0.5rem] grid-rows-2">
        <span className="border-primary/60 border-r"></span>
        <span className="border-primary/60 border-l border-b"></span>
        <span className="border-primary/60 group-[:not(:last-child)]/sub:border-r"></span>
        <span className="border-primary/60 group-[:not(:last-child)]/sub:border-l border-t"></span>
      </div>
      <Link
        className={cn(
          "h-8 px-3 flex items-center w-max transition-colors hover:bg-primary/10",
          className
        )}
        {...props}
        target="_blank"
      >
        {children}
      </Link>
    </div>
  );
}
