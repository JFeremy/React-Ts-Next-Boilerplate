import { TLocale } from './langs.interface';

export interface IPageParams {
  readonly params: {
    readonly lang: TLocale;
  };
}
