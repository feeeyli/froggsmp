"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Download, Shield } from "lucide-react";
import { redirect, useRouter, useSearchParams } from "next/navigation";

export default function Launcher() {
  const searchParams = useSearchParams();
  if (searchParams.get("k") !== process.env.NEXT_PUBLIC_LAUNCHER_KEY) {
    redirect("/");
  }

  const router = useRouter();

  return (
    <main className="dark bg-background h-screen w-screen flex flex-col justify-between items-center select-none">
      <header></header>
      <div className="flex gap-8">
        <Button
          className="h-auto py-4 bg-primary/10 !text-foreground flex flex-col hover:-translate-y-1 active:translate-y-0 transition-all"
          variant="ghost"
          onClick={() => {
            router.push(
              "https://drive.google.com/file/d/1BiKCF6xkLvEGw4FEpEYSIU-pZuRnL6ne/view"
              // "/874782/launcher/FroggSMP Launcher.exe"
            );
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/frogg-logo.png"
            alt="Logo da Frogg"
            className="w-48 pointer-events-none"
          />
          <span className="flex gap-2 items-center text-base">
            <Download size="1rem" /> Versão padrão
          </span>
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              className="h-auto py-4 bg-primary/10 !text-foreground flex flex-col hover:-translate-y-1 active:translate-y-0 transition-all"
              variant="ghost"
            >
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/frogg-logo.png"
                  alt="Logo da Frogg"
                  className="w-48 pointer-events-none"
                />
                <Shield
                  size="3rem"
                  className="absolute bottom-6 right-4 fill-foreground/80"
                />
              </div>
              <span className="flex gap-2 items-center text-base">
                <Download size="1rem" /> Versão admin
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="dark border-0 flex flex-col w-auto">
            <label htmlFor="password">Senha</label>
            <input
              className="w-32 h-8 border-primary/40 border bg-transparent rounded-sm outline-none focus-within:border-primary/80 focus-within:border-2 px-2 tracking-[0.4em] text-center"
              id="password"
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  router.push(
                    "https://drive.google.com/file/d/14-cvPW2fhY9RbEmhxnxiCpqokhGOy3iH/view"
                    // "/874782/launcher/423085/FroggSMP Launcher (Admin).exe"
                  );
                }
              }}
              autoFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <footer className="text-foreground mb-2 opacity-60">
        Ultima versão: v1.0
      </footer>
    </main>
  );
}
