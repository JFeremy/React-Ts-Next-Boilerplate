import { i18n } from '~/locales/i18n-config';

export type TLocale = (typeof i18n)['locales'][number];
export type TLangTranslate = Record<TLocale, string>;
export type TLangContent = Record<string, TLangTranslate>;
