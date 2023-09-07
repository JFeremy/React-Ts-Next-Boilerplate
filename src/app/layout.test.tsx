import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { TLocale } from '@/interfaces';

import RootLayout, { generateStaticParams } from './layout';

describe('RootLayout', () => {

  describe('Layout', () => {
    it('component matches snapshot', async () => {
      const params = { lang: 'fr' as TLocale };
      const text = 'root layout test';

      const tree = renderer
        .create(<RootLayout params={params}>
          <div>{text}</div>
        </RootLayout>)
        .toJSON();
      expect(tree).toMatchSnapshot();
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
});
