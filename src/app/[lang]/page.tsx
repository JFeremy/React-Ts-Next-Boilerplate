import { Metadata } from 'next';

import CounterTemp from '@/components/counter_temp';
import HelloTemp from '@/components/hello_temp';
import LocaleSwitcher from '@/components/local-switcher';
import { IPageParams, IStaticParams } from '@/interfaces';
import {
  getComponentsTranslation,
  getMetadataPageTranslation,
  getPageTranslation,
} from '@/utils/translate';
import { i18n } from '#i18n';
import { Container, VStack } from '#pcss/jsx';

interface HomeProps extends IPageParams {}

export async function generateStaticParams(): Promise<IStaticParams[]> {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: HomeProps): Promise<Metadata> {
  const metadata = getMetadataPageTranslation(params.lang, 'home');
  return {
    title: metadata['title'],
    description: metadata['description'],
  };
}

const Home = ({ params }: HomeProps): React.JSX.Element => {
  const tHome = getPageTranslation(params.lang, 'home');
  const { header: tHeader, counter: tCounter } = getComponentsTranslation(
    params.lang,
    ['counter', 'header'],
  );

  return (
    <Container p='6'>
      <VStack gap='5' justify='center'>
        <LocaleSwitcher title={tHeader['localeSwitcher']} />
        <p>{tHeader['title']}</p>
        <p>Docs</p>
        <h2>{params.lang}</h2>
        <HelloTemp lang={params.lang} />
        <p>{tHome['server']}</p>
        <CounterTemp
          increment={tCounter['more']}
          decrement={tCounter['less']}
        />
      </VStack>
    </Container>
  );
};

export default Home;
