import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/wiki")) {
    return NextResponse.rewrite(
      new URL(
        "https://frogg-smp.fandom.com/pt-br" +
          request.nextUrl.pathname.replace("/wiki", "")
      )
    );
  }
}

export const config = {
  matcher: ["/wiki", "/wiki/(.*)"],
};
