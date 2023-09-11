import { render } from '@testing-library/react';

import {
  getComponentsTranslation,
  getMetadataPageTranslation,
  getPageTranslation,
} from '@/utils/translate';

import Home, { generateMetadata, generateStaticParams } from '../page';

jest.mock('@/utils/translate', () => ({
  getPageTranslation: jest.fn(),
  getComponentsTranslation: jest.fn(),
  getMetadataPageTranslation: jest.fn(),
}));

describe('Home', () => {
  describe('Page', () => {
    it('page matches snapshot', async () => {
      const mockPTranslationData = {
        server: 'Necessitatibus facere odio',
      };
      const mockCTranslationData = {
        hello: {
          title: 'Lorem, ipsum dolor.',
        },
        header: {
          title: 'sit amet consectetur adipisicing elit.',
          localeSwitcher: 'Lorem ipsum dolor',
        },
        counter: {
          more: 'quibusdam',
          less: 'sed',
        },
      };

      (getPageTranslation as jest.Mock).mockReturnValue(mockPTranslationData);
      (getComponentsTranslation as jest.Mock).mockReturnValue(
        mockCTranslationData,
      );

      const view = render(<Home params={{ lang: 'fr' }} />);

      expect(view.container).toMatchSnapshot();
    });
  });

  describe('generateStaticParams', () => {
    it('should generate static params for all available locales', async () => {
      const staticParams = await generateStaticParams();
      expect(staticParams).toHaveLength(2);
      expect(staticParams).toEqual(
        expect.arrayContaining([{ lang: 'en' }, { lang: 'fr' }]),
      );
    });
  });

  describe('generateMetadata', () => {
    it('should generate metadata for locale', async () => {
      const mockMTranslationData = {
        title: 'Lorem ipsum dolor sit amet.',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo architecto mollitia blanditiis, accusantium quibusdam possimus officia eligendi eveniet nostrum iure.',
      };

      (getMetadataPageTranslation as jest.Mock).mockReturnValue(
        mockMTranslationData,
      );

      const metadata = await generateMetadata({ params: { lang: 'en' } });
      expect(metadata).toEqual(mockMTranslationData);
      expect(getMetadataPageTranslation as jest.Mock).toHaveBeenCalledWith(
        'en',
        'home',
      );
    });
  });
});
