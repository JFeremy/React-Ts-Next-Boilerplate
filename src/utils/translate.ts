import { TComponent, TLocale, TPage } from '@/interfaces';
import { langMetaDataPages } from '~/locales/metadata';
import { langPages } from '~/locales/pages';

import { langComponents } from '../../public/locales/components';

export const getMetadataPageTranslation = (
  locale: TLocale,
  page: TPage,
): Record<string, string> => {
  const translations = {};

  if (!langMetaDataPages[page]) {
    return {};
  }
  for (const item of Object.keys(langMetaDataPages[page])) {
    Object.assign(translations, {
      [item]: langMetaDataPages[page][item][locale],
    });
  }

  return translations;
};

export const getPageTranslation = (
  locale: TLocale,
  page: TPage,
): Record<string, string> => {
  const translations = {};

  if (!langPages[page]) {
    return {};
  }
  for (const item of Object.keys(langPages[page])) {
    Object.assign(translations, {
      [item]: langPages[page][item][locale],
    });
  }

  return translations;
};

export const getComponentsTranslation = (
  locale: TLocale,
  components: TComponent[],
): Record<string, Record<string, string>> => {
  const translations = {};
  for (const component of components) {
    const componentTranslations = {};

    if (langComponents[component]) {
      for (const item of Object.keys(langComponents[component])) {
        Object.assign(componentTranslations, {
          [item]: langComponents[component][item][locale],
        });
      }
    }

    Object.assign(translations, {
      [component]: componentTranslations,
    });
  }
  return translations;
};
