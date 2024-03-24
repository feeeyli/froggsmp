"use client";

/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { AnnouncementSchema } from "@/types/event.schema";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import Markdown from "react-markdown";

const publishers = {
  FroggTV() {
    return {
      picture:
        "https://pbs.twimg.com/profile_images/1723900518399963136/P21V1gu6_400x400.jpg",
      name: "FROGG",
      username: "FroggersTV",
    };
  },
  FroggUpdates() {
    return {
      picture:
        "https://pbs.twimg.com/profile_images/1753900367815880704/masaNemY_400x400.jpg",
      name: "Frogg SMP Updates",
      username: "froggsmpnots",
    };
  },
};

const imagesContainerVariants = cva(
  "grid aspect-[563.68/386.35] w-full grid-cols-2 grid-rows-2 gap-2",
  {
    variants: {
      images: {
        1: "[&>a]:row-span-2 [&>a]:col-span-2 aspect-auto",
        2: "[&>a]:row-span-2",
        3: "even:[&>a]:row-span-2",
        4: "",
      },
    },
  }
);

type AnnouncementProps = {
  announcement: AnnouncementSchema;
  children?: ReactNode;
  className?: string;
  index?: number;
};

export function Announcement(props: AnnouncementProps) {
  const publisher =
    publishers[props.announcement.publisher as keyof typeof publishers]();

  return (
    <CarouselItem
      className={cn("basis-full sm:basis-[22rem]", props.className)}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          show: () => ({
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              delay: 0.05 * (props.index ?? 0),
            },
          }),
        }}
      >
        {props.children}
        <article className="font-sans flex max-w-[22rem] flex-col gap-3 rounded-md border border-border px-4 py-3 text-foreground scrollbar bg-background">
          <header className="grid grid-cols-[auto_2.25rem] gap-2">
            <Link
              href={"https://twitter.com/" + publisher.username}
              target="_blank"
              className="flex items-center gap-2"
            >
              <img
                alt="profile"
                width={40}
                height={40}
                src={publisher.picture}
                className="aspect-square w-[2.625rem] rounded-full"
              />
              <section className="mb-[2px] flex flex-col text-sm">
                <span className="font-bold hover:underline">
                  {publisher.name}
                </span>
                <span className="font-normal text-muted-foreground">
                  @{publisher.username}
                </span>
              </section>
            </Link>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="my-auto ml-auto h-9 w-9"
            >
              <Link href={props.announcement.link} target="_blank">
                <ExternalLink size="1rem" />
              </Link>
            </Button>
          </header>
          <Markdown
            className="whitespace-pre-line text-sm "
            components={{
              em({ children }) {
                return (
                  <Link
                    href={
                      "https://twitter.com/hashtag/" + String(children).slice(1)
                    }
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    {children}
                  </Link>
                );
              },
              code({ children }) {
                return <span className="block text-center">{children}</span>;
              },
            }}
          >
            {props.announcement.text}
          </Markdown>
          {props.announcement.pictures.length > 0 && (
            <section
              className={cn(
                imagesContainerVariants({
                  images: props.announcement.pictures.length as 1 | 2 | 3 | 4,
                })
              )}
            >
              {props.announcement.pictures.map((pic) => (
                <Link href={props.announcement.link} target="_blank" key={pic}>
                  <img
                    alt="image-1"
                    width={254}
                    height={254 / 1.59}
                    src={pic}
                    className="h-full w-full rounded-md border border-border object-cover"
                  />
                </Link>
              ))}
            </section>
          )}
          {props.announcement.thread && (
            <>
              <Separator className="opacity-50" />
              <Link
                className="text-sm text-center hover:underline text-primary font-pixel"
                target="_blank"
                href={props.announcement.link}
              >
                Ver thread completa
              </Link>
            </>
          )}
        </article>
      </motion.div>
    </CarouselItem>
  );
}
