import i18nConfig  from './config.mjs'

i18nConfig.initI18n()

export function useTranslation() {
  return i18nConfig.translate
}
