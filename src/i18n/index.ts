import zh from './zh-TW.json';
import en from './en.json';

export type Locale = 'zh-TW' | 'en';
const dicts: Record<Locale, Record<string, string>> = { 'zh-TW': zh, en };

export function t(locale: Locale, key: string): string {
  return dicts[locale]?.[key] ?? key;
}

export function getLocaleFromUrl(url: URL): Locale {
  return url.pathname.startsWith('/en') ? 'en' : 'zh-TW';
}
