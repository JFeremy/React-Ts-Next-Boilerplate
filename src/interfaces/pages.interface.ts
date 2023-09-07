import { langPages } from '~/locales/pages';

type TPageKeys = keyof typeof langPages;

export type TPage = TPageKeys;
