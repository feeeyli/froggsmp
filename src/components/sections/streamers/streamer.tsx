/* eslint-disable @next/next/no-img-element */
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { StreamerSchema } from "@/types/streamer.schema";
import { BookOpenText, Radio } from "lucide-react";
import Link from "next/link";
import { Button } from "../../ui/button";

type StreamerProps = {
  streamer: StreamerSchema & {
    is_live: boolean;
  };
};

export function Streamer(props: StreamerProps) {
  return (
    <article
      className="flex flex-col relative"
      id={props.streamer.twitch_login ?? props.streamer.display_name}
    >
      {props.streamer.is_live && (
        <span className="absolute top-2 left-2 p-1.5 rounded-sm bg-destructive text-background z-10 text-sm">
          <Radio size="1.25rem" />
        </span>
      )}
      <picture className="relative md:h-52 md:w-52 h-36 w-36 group">
        <img
          src={props.streamer.avatar_url}
          alt={`Imagem de ${props.streamer.display_name}`}
          className="md:h-52 md:w-52 h-36 w-36 rounded-md"
        />
        <img
          src={`https://s.namemc.com/2d/skin/face.png?id=${props.streamer.skin_id}&scale=32`}
          alt={`Skin de ${props.streamer.display_name}`}
          style={{
            imageRendering: "pixelated",
          }}
          className="h-10 w-10 absolute bottom-2 right-2 border-background border-2 md:group-hover:h-20 md:group-hover:w-20 transition-all"
        />
      </picture>
      <footer className="flex flex-col py-2 px-3 bg-secondary/10 gap-3 md:w-52 w-36">
        <div className="md:grid flex flex-col grid-cols-[auto_2rem] items-center gap-2">
          <p className="text-lg font-semibold h-7">
            {props.streamer.display_name}
          </p>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-full md:w-8 hover:bg-secondary/20 gap-2 items-center text-primary hover:text-primary"
              >
                <span className="md:sr-only">Identidades</span>
                <svg
                  viewBox="0 0 24 24"
                  className="text-primary h-5 w-5 md:h-6 md:w-6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 13H3V24H7V13Z" className="fill-current" />
                  <path d="M16 13H8V24H16V13Z" className="fill-current" />
                  <path d="M21 13H17V24H21V13Z" className="fill-current" />
                  <path d="M16 4H8V12H16V4Z" className="fill-current" />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              side="right"
              className="p-1.5 flex flex-col w-auto"
              asChild
            >
              <ul>
                {props.streamer.characters.map((char, i) => (
                  <li className="flex items-center px-2 gap-2" key={char.name}>
                    F!{char.name}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 text-primary hover:text-primary"
                      asChild
                    >
                      <Link href={char.wiki_url} target="_blank">
                        <BookOpenText size="1rem" />
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex justify-center md:grid grid-cols-[2rem_2rem_auto] gap-2">
          <Button
            size="icon"
            data-disabled={props.streamer.youtube_login === null}
            className="h-8 w-8 rounded-sm bg-red-500 hover:bg-red-500/90 text-red-50"
            asChild
          >
            <Link
              target="_blank"
              href={`https://youtube.com/@${props.streamer.youtube_login}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-youtube"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" className="fill-red-50" />
              </svg>
            </Link>
          </Button>
          <Button
            size="icon"
            data-disabled={props.streamer.twitter_login === null}
            className="h-8 w-8 rounded-sm bg-sky-500 hover:bg-sky-500/90 text-sky-50"
            asChild
          >
            <Link
              target="_"
              href={`https://twitter.com/${props.streamer.twitter_login}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>
          </Button>
          <Button
            size="sm"
            data-disabled={props.streamer.twitch_login === null}
            className="h-8 w-8 px-0 md:px-3 md:w-auto rounded-sm gap-2 bg-purple-500 hover:bg-purple-500/90 text-purple-50"
            asChild
          >
            <Link
              target="_"
              href={`https://twitch.tv/${props.streamer.twitch_login}`}
            >
              <span className="hidden md:inline">Twitch</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitch"
              >
                <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
              </svg>
            </Link>
          </Button>
        </div>
      </footer>
    </article>
  );
}
