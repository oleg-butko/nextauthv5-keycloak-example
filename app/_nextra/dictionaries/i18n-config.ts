import { supportedLocales } from '@app/_i18n/locales';
import type EnglishLocale from './en';

export type Locale = (typeof supportedLocales)['locales'][number];

export type Dictionary = typeof EnglishLocale;

export type Dictionaries = Record<Locale, () => Promise<{ default: Dictionary }>>;
