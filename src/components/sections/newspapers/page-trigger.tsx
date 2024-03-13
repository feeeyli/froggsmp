"use client";

import { useQueryState } from "nuqs";

type PageTriggerProps = {
  day: number;
};

export function PageTrigger(props: PageTriggerProps) {
  const [, setPage] = useQueryState("jornal");

  return (
    <button
      onClick={() => setPage(String(props.day))}
      className="absolute inset-0 bg-foreground/60 opacity-0 transition-all flex items-center justify-center text-background rounded-md overflow-hidden sm:hover:opacity-100"
    >
      Ver paginas
    </button>
  );
}
