import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
const { i18n } = require('../../next-i18next.config.js')

export const getI18nPaths = () =>
  i18n.locales.map((lng: any) => ({
    params: {
      locale: lng,
    },
  }))

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
})

export const getI18nProps = async (ctx: { params: { locale: any } }, ns = ['common']) => {
  const locale = ctx?.params?.locale || i18n.defaultLocale
  let props = {
    ...(await serverSideTranslations(locale, ns)),
  }
  return props
}

export const makeStaticProps =
  (ns: string[] = []) =>
  async (ctx: any) => ({
    props: await getI18nProps(ctx, ns),
  })
