"use client";

import { CarouselItem } from "@/components/ui/carousel";
import { SLIDE_RIGHT_ANIMATION_VARIANTS } from "@/styles/animations";
import { motion } from "framer-motion";

export function NoStreams() {
  return (
    <CarouselItem className="sm:basis-[80%] max-w-[48rem]">
      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={SLIDE_RIGHT_ANIMATION_VARIANTS}
      >
        <div className="aspect-video bg-secondary/30 flex-grow rounded-md flex items-center justify-center text-center leading-7">
          <p className="max-w-[90%]">
            Nenhum streamer em live no servidor agora {":("}
            <br />
            🐸
          </p>
        </div>
      </motion.div>
    </CarouselItem>
  );
}
