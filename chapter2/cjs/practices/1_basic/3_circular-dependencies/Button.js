const { useTranslation } = require('./i18n')

function Button() {
  const t = useTranslation()
  return t('confirm')
}

module.exports = { Button }