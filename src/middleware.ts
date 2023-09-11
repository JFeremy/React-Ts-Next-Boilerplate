import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { i18n } from '~/locales/i18n-config';

import { TLocale } from './interfaces';

const getLocale = (request: NextRequest): TLocale => {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: TLocale[] = [...i18n.locales];

  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale as TLocale;
};

const extractLangFromPath = (path: string): TLocale | undefined => {
  // Check if there is any supported locale in the pathname
  const pathIsMissingLocale = i18n.locales.every(
    (locale) => !path.startsWith(`/${locale}/`) && path !== `/${locale}`,
  );
  if (pathIsMissingLocale) {
    return undefined;
  } else {
    const partsPath = path.split('/');
    return partsPath[1] as TLocale;
  }
};

export const middleware = (request: NextRequest): NextResponse | void => {
  const pathname = request.nextUrl.pathname;

  const localeInPath = extractLangFromPath(pathname);
  if (!localeInPath) {
    const definedLocale = getLocale(request);
    return NextResponse.redirect(
      new URL(
        `/${definedLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url,
      ),
    );
  }
};

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
