import { langComponents } from '~/locales/components';

type TComponentKeys = keyof typeof langComponents;

export type TComponent = TComponentKeys;
