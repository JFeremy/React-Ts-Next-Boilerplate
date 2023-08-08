import languageDetector from 'next-language-detector'
const { i18n } = require('../../next-i18next.config.js')

export default languageDetector({
  fallbackLng: i18n.defaultLocale,
  supportedLngs: i18n.locales,
})
