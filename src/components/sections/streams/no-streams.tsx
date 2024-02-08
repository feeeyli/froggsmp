import { CarouselItem } from "@/components/ui/carousel";

export function NoStreams() {
  return (
    <CarouselItem className="sm:basis-[80%] max-w-[48rem]">
      <div className="aspect-video bg-secondary/30 flex-grow rounded-md flex items-center justify-center text-center leading-7">
        <p className="max-w-[90%]">
          Nenhum streamer em live no servidor agora {":("}
          <br />
          🐸
        </p>
      </div>
    </CarouselItem>
  );
}
