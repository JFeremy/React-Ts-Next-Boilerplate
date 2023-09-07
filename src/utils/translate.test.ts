import { TComponent, TPage } from '@/interfaces';
import { langComponents } from '~/locales/components';
import { langPages } from '~/locales/pages';

import { langMetaDataPages } from '../../public/locales/metadata';
import {
  getComponentsTranslation,
  getMetadataPageTranslation,
  getPageTranslation,
} from './translate';

describe('getMetadataPageTranslation', () => {
  const testPage = {
    message: {
      fr: 'Message de test',
    },
  };

  beforeAll(() => {
    Object.assign(langMetaDataPages, {
      testPage,
    });
  });

  afterAll(() => {
    delete langMetaDataPages['testPage' as unknown as TPage];
  });

  it('should return page translation for a given locale', () => {
    const translations = getMetadataPageTranslation(
      'fr',
      'testPage' as unknown as TPage,
    );

    expect(translations).toEqual({ message: 'Message de test' });
  });

  it('should return empty translation for a given locale but unknow page', () => {
    const translations = getMetadataPageTranslation(
      'fr',
      'empty' as unknown as TPage,
    );

    expect(translations).toEqual({});
  });
});

describe('getPageTranslation', () => {
  const testPage = {
    message: {
      fr: 'Message de test',
    },
  };

  beforeAll(() => {
    Object.assign(langPages, {
      testPage,
    });
  });

  afterAll(() => {
    delete langPages['testPage' as unknown as TPage];
  });

  it('should return page translation for a given locale', () => {
    const translations = getPageTranslation(
      'fr',
      'testPage' as unknown as TPage,
    );

    expect(translations).toEqual({ message: 'Message de test' });
  });

  it('should return empty translation for a given locale but unknow page', () => {
    const translations = getPageTranslation('fr', 'empty' as unknown as TPage);

    expect(translations).toEqual({});
  });
});

describe('getComponentsTranslation', () => {
  const testComponent1 = {
    message: {
      fr: 'Message de test 1',
    },
  };
  const testComponent2 = {
    message: {
      fr: 'Message de test 2',
    },
  };

  beforeAll(() => {
    Object.assign(langComponents, {
      testComponent1,
      testComponent2,
    });
  });
  afterAll(() => {
    delete langComponents['testComponent1' as unknown as TComponent];
    delete langComponents['testComponent2' as unknown as TComponent];
  });

  it('should return components translation for a given locale', () => {
    const expectedTranslation = {
      testComponent1: {
        message: testComponent1.message.fr,
      },
      testComponent2: {
        message: testComponent2.message.fr,
      },
    };
    const translations = getComponentsTranslation('fr', [
      'testComponent1',
      'testComponent2',
    ] as unknown as TComponent[]);

    expect(translations).toEqual(expectedTranslation);
  });

  it('should return components translation for a given locale', () => {
    const expectedTranslation = {
      testComponent1: {
        message: testComponent1.message.fr,
      },
      testComponent3: {},
    };
    const translations = getComponentsTranslation('fr', [
      'testComponent1',
      'testComponent3',
    ] as unknown as TComponent[]);

    expect(translations).toEqual(expectedTranslation);
  });
});
