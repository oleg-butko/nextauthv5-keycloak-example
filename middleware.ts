// import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';
import { middleware as nextraMiddleware } from 'nextra/locales';

//
// https://nextjs.org/docs/app/api-reference/file-conventions/middleware
//

export default async function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  console.log('middleware path:', pathName); // eslint-disable-line no-console
  return nextraMiddleware(request);
  // TODO: check later if workaround is still needed, maybe add condition for production
  //   const useWorkaround = false; // true when not using 'next dev --turbo'
  //   // https://github.com/mantinedev/mantine/issues/6105
  //   // or maybe alternative https://dev.to/yardenporat/how-to-hide-nextjs-14-server-logs-38e9
  //   if (
  //     useWorkaround &&
  //     pathName.startsWith('/_next/static/chunks/app/') &&
  //     pathName.endsWith('.module.css.mjs.map')
  //   ) {
  //     return new NextResponse(null, { status: 200, headers: { 'Content-Type': 'application/json' } });
  //   }
  //   //   if (pathName.startsWith('/_next/static')) {
  //   //     return NextResponse.next();
  //   //   }
  // return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|manifest.webmanifest|_pagefind|favicon.svg|favicon.ico|icon.svg|logo.png|sitemap.xml|robots.txt|.*\\.png|.*\\.jpg|.*\\.jpeg$).*)',
  ],
};
