import { createI18n } from 'vue-i18n'
import messages from './locales'

const defaultLocale = localStorage.getItem('app-lang') || 'en'

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages,
})

export default i18n
