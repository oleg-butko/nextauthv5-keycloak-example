import { NextResponse, type NextRequest } from 'next/server';

//
// https://nextjs.org/docs/app/api-reference/file-conventions/middleware
//

export default async function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  // console.log('middleware pathName', pathName); // eslint-disable-line no-console
  // TODO: check later if workaround is still needed
  const useWorkaround = true;
  // https://github.com/mantinedev/mantine/issues/6105
  // or maybe alternative https://dev.to/yardenporat/how-to-hide-nextjs-14-server-logs-38e9
  if (
    useWorkaround &&
    pathName.startsWith('/_next/static/chunks/app/') &&
    pathName.endsWith('.module.css.mjs.map')
  ) {
    return new NextResponse(null, { status: 200, headers: { 'Content-Type': 'application/json' } });
  }
  if (pathName.startsWith('/_next/static')) {
    return NextResponse.next();
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/image|manifest.webmanifest|favicon.ico|logo.png|sitemap.xml|robots.txt|.*\\.png|.*\\.jpg|.*\\.jpeg$).*)',
  ],
};
