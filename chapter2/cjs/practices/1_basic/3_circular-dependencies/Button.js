const { useTranslation } = require('./i18n')

const ButtonI18n = {
  ko: {
    confirm: '확인',
  },
  en: {
    confirm: 'Confirm'
  },
}

function Button() {
  const t = useTranslation()
  return t('button.confirm')
}

module.exports = { Button, ButtonI18n }