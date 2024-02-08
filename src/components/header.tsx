import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

/* eslint-disable @next/next/no-img-element */
export function Header() {
  return (
    <>
      <img
        src="/froggsmp-logo.png"
        alt="FroggSMP"
        className="h-10 mx-auto my-4 sm:hidden"
      />
      <header className="px-6 py-4 sticky sm:top-0 -top-1 bg-background z-30 flex justify-between items-center">
        <img
          src="/froggsmp-logo.png"
          alt="FroggSMP"
          className="h-10 hidden sm:block"
        />
        <nav>
          <ul className="flex flex-wrap justify-center">
            <li>
              <Button size="sm" variant="link" asChild>
                <Link href="#lives">Lives</Link>
              </Button>
            </li>
            <li>
              <Button size="sm" variant="link" asChild>
                <Link href="#participantes">Participantes</Link>
              </Button>
            </li>
            <li>
              <Button size="sm" variant="link" asChild>
                <Link href="#eventos">Eventos</Link>
              </Button>
            </li>
            <li>
              <Button size="sm" variant="link" asChild>
                <Link href="#atualizacoes">Atualizações</Link>
              </Button>
            </li>
            <li>
              <Button size="sm" variant="link" asChild>
                <Link href="#assistir">VODs</Link>
              </Button>
            </li>
            <li>
              <Button size="sm" variant="link" asChild>
                <Link href="https://multifrogg.vercel.app" target="_blank">
                  MultiFrogg <ExternalLink size="0.75rem" className="ml-2" />
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
