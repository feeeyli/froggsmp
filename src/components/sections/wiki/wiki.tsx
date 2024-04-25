// spellchecker: disable

import { Typing } from "@/components/animations/typing";
import { Button } from "@/components/ui/button";
import {
  Tree,
  TreeItem,
  TreeItemTitle,
  TreeSubItem,
  TreeSubItems,
} from "@/components/ui/tree";
import { EVENTS } from "@/data/events";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

type UpdatesProps = {};

export function Wiki(props: UpdatesProps) {
  return (
    <section className="py-8 px-4 sm:px-8 md:px-20 lg:px-40 flex flex-col gap-6">
      <div className="flex flex-col items-start">
        <div className="flex gap-2 items-center">
          <Typing
            as="h2"
            className="text-3xl font-semibold flex items-center gap-x-6 gap-y-3 flex-wrap"
            id="wiki"
          >
            Wiki
          </Typing>
          <Button variant="ghost" size="icon" className="h-7 w-7" asChild>
            <Link href="/wiki" target="_blank" className="!text-primary">
              <ExternalLink size="1rem" />
            </Link>
          </Button>
        </div>
        <Typing as="span" className="text-primary">
          Clique em um nome para ver na Wiki
        </Typing>
      </div>
      <div className="flex max-sm:flex-col flex-wrap gap-4">
        <Tree>
          <TreeItem>
            <TreeItemTitle>Personagens</TreeItemTitle>
            <TreeSubItems className="scrollbar scrollbar-wiki max-h-64 overflow-y-auto pr-2 w-full">
              <TreeSubItem href="/wiki/Akino">Akino</TreeSubItem>
              <TreeSubItem href="/wiki/Ameizim">Ameizim</TreeSubItem>
              <TreeSubItem href="/wiki/Áries">Áries</TreeSubItem>
              <TreeSubItem href="/wiki/Bastet">Bastet</TreeSubItem>
              <TreeSubItem href="/wiki/Carrasquera">Carras</TreeSubItem>
              <TreeSubItem href="/wiki/Dreasbro">Dreas</TreeSubItem>
              <TreeSubItem href="/wiki/Febatista">Febatista</TreeSubItem>
              <TreeSubItem href="/wiki/Flopi">Flopi</TreeSubItem>
              <TreeSubItem href="/wiki/Jinkiwinkki">Jinki</TreeSubItem>
              <TreeSubItem href="/wiki/Kaory">Kaory</TreeSubItem>
              <TreeSubItem href="/wiki/Kellerzons">Keller</TreeSubItem>
              <TreeSubItem href="/wiki/Kojj">Kojj</TreeSubItem>
              <TreeSubItem href="/wiki/LJoga">LJoga</TreeSubItem>
              <TreeSubItem href="/wiki/Mynzinha">Myn</TreeSubItem>
              <TreeSubItem href="/wiki/Rafly">Rafly</TreeSubItem>
              <TreeSubItem href="/wiki/Scott">Scott</TreeSubItem>
              <TreeSubItem href="/wiki/Tiba">Tiba</TreeSubItem>
              <TreeSubItem href="/wiki/Umild">Umild</TreeSubItem>
              <TreeSubItem href="/wiki/Yumithra">Yumi</TreeSubItem>
            </TreeSubItems>
          </TreeItem>
          <TreeItem>
            <TreeItemTitle>Outros</TreeItemTitle>
            <TreeSubItems>
              <TreeSubItem href="/wiki/Abaddon">Abaddon</TreeSubItem>
              <TreeSubItem href="/wiki/Paulo">Paulo</TreeSubItem>
            </TreeSubItems>
          </TreeItem>
        </Tree>
        <Tree>
          <TreeItem>
            <TreeItemTitle>Eventos</TreeItemTitle>
            <TreeSubItems>
              {Object.values(EVENTS).map((event) => (
                <TreeSubItem
                  key={event.name}
                  href={`/wiki/${event.name.replace(/ /g, "_")}`}
                >
                  <span className="inline-block mr-3">{event.emoji}</span>{" "}
                  {event.name}
                </TreeSubItem>
              ))}
            </TreeSubItems>
          </TreeItem>
        </Tree>
        <Tree>
          <TreeItem>
            <TreeItemTitle>Organizações</TreeItemTitle>
            <TreeSubItems>
              <TreeSubItem href="/wiki/Torcida_Organizada_do_Grêmio">
                Torcida Organizada do Grêmio
              </TreeSubItem>
              <TreeSubItem href="/wiki/A_agência">A agência</TreeSubItem>
              <TreeSubItem href="/wiki/A_F.O.D.A.">F.O.D.A.</TreeSubItem>
            </TreeSubItems>
          </TreeItem>
        </Tree>
        <Tree>
          <TreeItem>
            <TreeItemTitle>Entidades</TreeItemTitle>
            <TreeSubItems>
              <TreeSubItem href="/wiki/Demonio">Demônio</TreeSubItem>
              <TreeSubItem href="/wiki/Frogguinha_Caída">
                Frogguinha Caída
              </TreeSubItem>
              <TreeSubItem href="/wiki/Frogguinha_Deusa">
                Frogguinha Deusa
              </TreeSubItem>
              <TreeSubItem href="/wiki/O_Homem_do_Chapéu">
                O Homem do Chapéu
              </TreeSubItem>
              <TreeSubItem href="/wiki/Palhaço">Palhaço</TreeSubItem>
              <TreeSubItem href="/wiki/%3F%3F%3F">???</TreeSubItem>
            </TreeSubItems>
          </TreeItem>
          <TreeItem>
            <TreeItemTitle>NPC&apos;s</TreeItemTitle>
            <TreeSubItems>
              <TreeSubItem href="/wiki/Enderson">Enderson</TreeSubItem>
              <TreeSubItem href="/wiki/FROGG-01">FROGG-01</TreeSubItem>
            </TreeSubItems>
          </TreeItem>
        </Tree>
        <Tree>
          <TreeItem>
            <TreeItemTitle>Construções</TreeItemTitle>
            <TreeSubItems>
              <TreeSubItem href="/wiki/Museu">Museu</TreeSubItem>
            </TreeSubItems>
          </TreeItem>
        </Tree>
      </div>
    </section>
  );
}
