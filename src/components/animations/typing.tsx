"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ComponentProps } from "react";

type Props = {
  as: "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & ComponentProps<typeof motion.h1>;

export function Typing({ as: As, ...props }: Props) {
  const words = props.children?.toString() || "";
  const letters = words.split("");

  const variant = {
    initial: { opacity: 0 },
    animate: (i: any) => ({
      opacity: 1,
      transition: {
        delay: i * 0.025, // Delay each letter's animation by 0.05 seconds
      },
    }),
  };

  return (
    <As className="inline-flex">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={variant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={i}
          className={cn("font-pixel", props.className)}
          transition={{
            duration: 0.05,
          }}
          {...props}
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.span>
      ))}
    </As>
  );
}
