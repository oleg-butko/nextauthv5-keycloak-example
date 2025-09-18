import { supportedLocales } from '@app/_i18n/locales';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';

const defaultNS = 'default';
const runsOnServerSide = typeof window === 'undefined';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend((language, namespace) => import(`./locales/${language}/${namespace}.json`))
  )
  .init({
    // debug: true,
    supportedLngs: supportedLocales.locales,
    fallbackLng: supportedLocales.defaultLocale,
    lng: undefined, // let detect the language on client side
    fallbackNS: defaultNS,
    defaultNS,
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? supportedLocales.locales : [],
  });

export default i18next;
