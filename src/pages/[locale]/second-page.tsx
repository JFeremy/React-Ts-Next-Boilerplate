import { useTranslation } from 'next-i18next'
import {
  getStaticPaths /*, makeStaticProps*/,
  getI18nProps,
} from '../../lib/getStatic'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
const { i18n } = require('../../../next-i18next.config.js')
import LanguageSwitchLink from '@/components/LanguageSwitch/LanguageSwitch'

const SecondPage = ({ someOtherData }: any) => {
  const router = useRouter()
  const { t } = useTranslation(['second-page', 'common', 'footer'])
  const currentLocale =
  router.query['locale'] || i18n.defaultLocale

  return (
    <>
    <Head>
      <title>{t('title')}</title>
      <meta name='description' content='Generated by create next app' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
      <main>
        <h1>{t('h1')}</h1>
        <div>
          <Link href="/">
            <button type="button">{t('ommon:back-to-home')}</button>
          </Link>
        </div>
        <p>{someOtherData}</p>
      </main>
      <footer>
        <p>{t('footer:description')}</p>
        <p>{t('footer:change-locale')}</p>
        
        {i18n.locales.map((locale: any) => {
          if (locale === currentLocale) return null
          return <LanguageSwitchLink locale={locale} key={locale} />
        })}
      </footer>
    </>
  )
}

export default SecondPage

// const getStaticProps = makeStaticProps(['second-page', 'common', 'footer'])
// export { getStaticPaths, getStaticProps }

// or if you want to merge the i18n props with other props...
export { getStaticPaths }
export const getStaticProps = async (context: any) => {
  // some data fetched from anywhere...
  const someOtherData = 'hello world'
  return {
    props: {
      ...(await getI18nProps(context, [
        'second-page',
        'common',
        'footer',
      ])),
      someOtherData,
    },
  }
}
