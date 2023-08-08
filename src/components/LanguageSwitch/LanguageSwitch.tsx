import languageDetector from '@/lib/languageDetector'
import { useRouter } from 'next/router'
import Link from 'next/link'

const LanguageSwitchLink = ({ locale, ...rest }: any) => {
  const router = useRouter()

  let href = rest.href || router.asPath
  let pName = router.pathname
  console.log(`debug pName`, pName)

  console.log(`Object.keys(router.query)`, Object.keys(router.query))
  Object.keys(router.query).forEach(k => {
    console.log(`debug k`, k)
    console.log('router.query[k]', router.query[k])
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale)
      return
    }
    // pName = pName.replace(`[${k}]`, router.query[k])
  })
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName
  }
  if (href.indexOf(`/${locale}`) < 0) {
    href = `/${locale}${href}`
  }

  return (
    <Link href={href}>
      <button
        style={{ fontSize: 'small' }}
        onClick={() => languageDetector.cache(locale)}
      >
        {locale}
      </button>
    </Link>
  )
}

export default LanguageSwitchLink
