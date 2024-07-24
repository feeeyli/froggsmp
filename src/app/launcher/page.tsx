import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download, Lock, Shield } from "lucide-react";
import { redirect } from "next/navigation";

type LauncherProps = {
  searchParams: {
    k?: string;
    $frogg?: string;
  };
};

export default function Launcher(props: LauncherProps) {
  const key = props.searchParams.k || props.searchParams.$frogg;
  if (key !== process.env.NEXT_PUBLIC_LAUNCHER_KEY) {
    redirect("/");
  }
  const admin = !!props.searchParams.$frogg;

  return (
    <main className="dark bg-background h-screen w-screen flex flex-col justify-between items-center select-none">
      <header></header>
      <div className="flex gap-8">
        <Button
          className="h-auto py-4 bg-primary/10 !text-foreground flex flex-col hover:-translate-y-1 active:translate-y-0 transition-all"
          variant="ghost"
          asChild
        >
          <a
            href="https://drive.google.com/file/d/1BiKCF6xkLvEGw4FEpEYSIU-pZuRnL6ne/view"
            target="_blank"
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
          </a>
        </Button>
        <div className="relative">
          <Button
            className={cn(
              "h-auto py-4 bg-primary/10 !text-foreground flex flex-col transition-all hover:-translate-y-1 active:translate-y-0",
              !admin ? "pointer-events-none opacity-30" : undefined
            )}
            variant="ghost"
            asChild
          >
            <a
              href={
                admin
                  ? "https://drive.google.com/file/d/14-cvPW2fhY9RbEmhxnxiCpqokhGOy3iH/view"
                  : "#"
              }
              target="_blank"
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
            </a>
          </Button>
          {!admin && (
            <div className="absolute inset-0 flex items-center justify-center rounded-md z-10 cursor-not-allowed">
              <Lock
                size="2rem"
                className="text-foreground fill-foreground/80"
              />
            </div>
          )}
        </div>
      </div>
      <footer className="text-foreground mb-2 opacity-60">
        Ultima versão: v1.0
      </footer>
    </main>
  );
}
