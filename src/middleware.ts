import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/wiki')) {
    return NextResponse.rewrite(new URL('https://frogg-smp.fandom.com/pt-br/wiki/'))
  }
}

export const config = {
  matcher: '/wiki',
}
