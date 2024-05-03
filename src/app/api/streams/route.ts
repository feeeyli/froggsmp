import { StreamSchema } from "@/types/stream.schema";
import { NextResponse } from "next/server";

const STREAMERS = [
  "scottonauta",
  "umildlive",
  "tiba041",
  "kellerzons",
  "oakinoo",
  "ameizim",
  "ameliebluie",
  "bastet",
  "carrasquera",
  "dreasbro",
  "febatista",
  "fehdubs",
  "oflopi",
  "guaxinim",
  "jinkiwinkki",
  "kaaory",
  "kojjlul",
  "ljoga",
  "mynluvsx",
  "imrafly",
  "yuiboboca",
  "yuyusaz"
];

type TwitchResponse = {
  data: {
    id: string;
    user_id: string;
    user_login: string;
    user_name: string;
    game_id: string;
    game_name: string;
    type: string;
    title: string;
    tags: string[];
    viewer_count: number;
    started_at: string;
    language: string;
    thumbnail_url: string;
    tag_ids: string[];
    is_mature: boolean;
  }[];
};

type UserTwitchResponse = {
  data: {
    id: string;
    login: string;
    display_name: string;
    type: string;
    broadcaster_type: string;
    description: string;
    profile_image_url: string;
    offline_image_url: string;
    view_count: number;
    email: string;
    created_at: string;
  }[];
};

async function getStreams() {
  const userLogins = STREAMERS.map((streamer) => `user_login=${streamer}`).join(
    "&"
  );

  const streamsRes = await fetch(
    `https://api.twitch.tv/helix/streams?${userLogins}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TWITCH_SECRET}`,
        "Client-Id": process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID!,
      },
      next: { revalidate: 15 },
    }
  );

  const streamersRes = await fetch(
    `https://api.twitch.tv/helix/users?${userLogins.replaceAll(
      "user_login",
      "login"
    )}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TWITCH_SECRET}`,
        "Client-Id": process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID!,
      },
      next: { revalidate: 15 },
    }
  );

  const { data: streamsData } = (await streamsRes.json()) as TwitchResponse;
  const { data: streamersData } =
    (await streamersRes.json()) as UserTwitchResponse;

  const streams = streamersData
    .map((streamer): StreamSchema | null => {
      const stream = streamsData.find((s) => s.user_login === streamer.login);

      if (typeof stream === "undefined" || stream.game_name !== "Minecraft")
        return null;

      return {
        display_name: streamer.display_name,
        login: streamer.login,
        thumbnail_url: streamer.profile_image_url,
        title: stream.title,
        started_at: stream.started_at,
      };
    })
    .filter((stream) => stream) as StreamSchema[];

  return streams.sort((x, y) => x.display_name.localeCompare(y.display_name));
}

export async function GET() {
  const parsedStreamers = await getStreams();

  return NextResponse.json(parsedStreamers);
}
