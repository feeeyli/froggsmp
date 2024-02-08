import { TwitchPlayer } from "react-twitch-embed";

type VodPlayerProps = {
  vod: string;
};

export function VodPlayer(props: VodPlayerProps) {
  if (!props.vod) return null;

  return (
    <div className="aspect-video bg-primary rounded w-full overflow-hidden">
      <TwitchPlayer
        video={props.vod.split("?t=")[0]}
        time={props.vod.split("?t=")[1] ?? "0h0m0s"}
        className="!h-full !w-full"
      />
    </div>
  );
}
