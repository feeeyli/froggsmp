import { HeaderLink, HeaderLinks } from "./animations/header-links";

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
        <HeaderLinks>
          <HeaderLink href="#lives">Lives</HeaderLink>
          <HeaderLink href="#participantes">Participantes</HeaderLink>
          <HeaderLink href="#eventos">Eventos</HeaderLink>
          <HeaderLink href="#atualizacoes">Atualizações</HeaderLink>
          <HeaderLink href="#correio">Correio Froggiano</HeaderLink>
          <HeaderLink href="#wiki">Wiki</HeaderLink>
          <HeaderLink href="#assistir">VODs</HeaderLink>
          {/* <HeaderLink href="https://multifrogg.vercel.app" target="_blank">
            MultiFrogg <ExternalLink size="0.75rem" className="ml-2" />
          </HeaderLink> */}
        </HeaderLinks>
      </header>
    </>
  );
}
