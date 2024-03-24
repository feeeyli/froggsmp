"use client";

import { FADE_DOWN_ANIMATION_VARIANTS } from "@/styles/animations";
import { motion } from "framer-motion";
import { ComponentProps } from "react";
import { Button } from "../ui/button";

type Props = {
  children: React.ReactNode;
};

export function HeaderLinks(props: Props) {
  return (
    <motion.nav
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="flex flex-wrap justify-center md:justify-end md:max-w-[65%]"
    >
      {props.children}
    </motion.nav>
  );
}

export function HeaderLink(props: ComponentProps<typeof motion.a>) {
  return (
    <Button size="sm" variant="link" asChild>
      <motion.a variants={FADE_DOWN_ANIMATION_VARIANTS} {...props}></motion.a>
    </Button>
  );
}
