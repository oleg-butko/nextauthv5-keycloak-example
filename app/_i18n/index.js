import { headers } from 'next/headers';
import i18next from './i18next';

// export const fallbackLng = 'en';
// export const languages = [fallbackLng, 'es', 'ru'];
export const cookieName = 'i18next';
export const headerName = 'x-i18next-current-language';
// export const i18n = {
//   defaultLocale: 'en',
//   locales: ['en', 'es', 'ru'],
// };
export async function getT(ns, options) {
  const headerList = await headers();
  const lng = headerList.get(headerName);
  if (lng && i18next.resolvedLanguage !== lng) {
    await i18next.changeLanguage(lng);
  }
  if (ns && !i18next.hasLoadedNamespace(ns)) {
    await i18next.loadNamespaces(ns);
  }
  return {
    t: i18next.getFixedT(
      lng ?? i18next.resolvedLanguage,
      Array.isArray(ns) ? ns[0] : ns,
      options?.keyPrefix
    ),
    i18n: i18next,
  };
}

export function getDirection(locale) {
  return locale === 'es' ? 'rtl' : 'ltr';
}
