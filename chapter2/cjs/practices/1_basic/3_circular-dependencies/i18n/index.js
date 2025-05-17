const i18nConfig = require('./config')

i18nConfig.initI18n()

function useTranslation() {
  return i18nConfig.translate
}

module.exports = {
  useTranslation,
}
