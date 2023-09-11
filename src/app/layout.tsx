import './_styles/globals.css';

import { PropsWithChildren } from 'react';

import { IPageParams, IStaticParams } from '@/interfaces';
import { i18n } from '~/locales/i18n-config';

import { AnybodyFont, FiraCodeFont } from './_styles/font';

export async function generateStaticParams(): Promise<IStaticParams[]> {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const RootLayout = ({
  children,
  params,
}: PropsWithChildren<IPageParams>): React.JSX.Element => {
  return (
    <html
      lang={params.lang}
      className={`${FiraCodeFont.variable} ${AnybodyFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
