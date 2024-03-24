"use client";

import { FADE_DOWN_ANIMATION_VARIANTS } from "@/styles/animations";
import { motion } from "framer-motion";
import { ComponentProps } from "react";

export function FadeDown(props: ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={FADE_DOWN_ANIMATION_VARIANTS}
      {...props}
    ></motion.div>
  );
}

export function FadeDownImg(props: ComponentProps<typeof motion.img>) {
  return (
    <motion.img
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={FADE_DOWN_ANIMATION_VARIANTS}
      {...props}
    />
  );
}
