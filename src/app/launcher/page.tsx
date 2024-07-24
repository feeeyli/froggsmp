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

export default async function Launcher(props: LauncherProps) {
  const key = props.searchParams.k || props.searchParams.$frogg;
  if (key !== process.env.NEXT_PUBLIC_LAUNCHER_KEY) {
    redirect("/");
  }
  const admin = !!props.searchParams.$frogg;
  const data = await fetch(process.env.NEXT_PUBLIC_LAUNCHER_HYGRAPH_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
          query Releases {
            releases(last: 2, orderBy: version_DESC) {
              version
              downloadUrl
              admin
            }
          }        
          `,
    }),
    next: { revalidate: 3600 },
  });
  const releases = (await data.json()).data.releases as {
    version: number;
    downloadUrl: string;
    admin: boolean;
  }[];
  const urls = releases.reduce((acc, item) => {
    if (item.admin) {
      acc.admin = item.downloadUrl;
    } else {
      acc.default = item.downloadUrl;
    }
    return acc;
  }, {} as { admin: string; default: string });

  return (
    <main className="dark bg-background h-screen w-screen flex flex-col justify-between items-center select-none">
      <header></header>
      <div className="flex gap-8">
        <Button
          className="h-auto py-4 bg-primary/10 !text-foreground flex flex-col hover:-translate-y-1 active:translate-y-0 transition-all"
          variant="ghost"
          asChild
        >
          <a href={urls.default} target="_blank">
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
            <a href={admin ? urls.admin : "#"} target="_blank">
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
        Ultima versão: v{releases[0].version.toFixed(1)}
      </footer>
    </main>
  );
}
