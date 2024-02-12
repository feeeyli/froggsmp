"use client";

import { useQueryState } from "nuqs";

type PageTriggerProps = {
  day: string;
};

export function PageTrigger(props: PageTriggerProps) {
  const [, setPage] = useQueryState("pagina");

  return (
    <button
      onClick={() => setPage(props.day.replace("2024-", ""))}
      className="absolute inset-0 bg-foreground/60 opacity-0 transition-all flex items-center justify-center text-background rounded-md overflow-hidden sm:hover:opacity-100"
    >
      Ver paginas
    </button>
  );
}
