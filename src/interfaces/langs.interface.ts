import { i18n } from '#i18n';

export type TLocale = (typeof i18n)['locales'][number];
export type TLangTranslate = Record<TLocale, string>;
export type TLangContent = Record<string, TLangTranslate>;
