import { NextResponse, type NextRequest } from 'next/server';
import { cookieName, headerName } from '@app/_i18n';
import { supportedLocales } from '@app/_i18n/locales';
import acceptLanguage from 'accept-language';

//
// https://nextra.site/docs/guide/i18n
// Automatically detect and redirect to user-selected language (optional)
// WARN This approach will not work for i18n sites that are statically exported with output: 'export' in nextConfig
// import { middleware as nextraMiddleware } from 'nextra/locales';
//

acceptLanguage.languages(supportedLocales.locales);

//
// https://nextjs.org/docs/app/api-reference/file-conventions/middleware
//

export default async function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  console.log('middleware path:', pathName); // eslint-disable-line no-console
  if (pathName.startsWith('/.well-known')) {
    // Workaround for /.well-known/appspecific/com.chrome.devtools.json
    return NextResponse.json({});
  }
  //
  // helper from https://www.locize.com/blog/i18n-next-app-router
  //
  const showLogAboutLang = false; // verbose
  let lng;
  if (request.cookies.has(cookieName)) {
    lng = acceptLanguage.get(request.cookies.get(cookieName)?.value);
    showLogAboutLang && console.log(`middleware lng(cookie): ${lng}`);
  }
  if (!lng) {
    lng = acceptLanguage.get(request.headers.get('Accept-Language'));
    showLogAboutLang && console.log(`middleware lng(acceptLanguage): ${lng}`);
  }
  if (!lng) {
    lng = supportedLocales.defaultLocale;
  }
  const lngInPath = supportedLocales.locales.find((loc) =>
    request.nextUrl.pathname.startsWith(`/${loc}`)
  );
  showLogAboutLang && console.log(`middleware lngInPath: ${lngInPath}, lng: ${lng}`);
  lng = lngInPath || lng;
  const headers = new Headers(request.headers);
  headers.set(headerName, lng);
  // If the language is not in the path, redirect to include it
  if (!lngInPath) {
    return NextResponse.redirect(
      new URL(`/${lng}${request.nextUrl.pathname}${request.nextUrl.search}`, request.url)
    );
  }
  const response = NextResponse.next({ headers });
  if (lng) {
    // update cookie after using LocaleSwitch button
    response.cookies.set(cookieName, lng);
  }
  return response;
  //   return nextraMiddleware(request);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|manifest.webmanifest|_pagefind|favicon.svg|favicon.ico|icon.svg|logo.png|sitemap.xml|robots.txt|.*\\.png|.*\\.jpg|.*\\.jpeg$).*)',
  ],
};
