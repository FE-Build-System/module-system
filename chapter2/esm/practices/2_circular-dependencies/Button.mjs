import { useTranslation } from './i18n/index.mjs'

export function ButtonI18n() {
  return {
    ko: {
      confirm: '확인',
    },
    en: {
      confirm: 'Confirm'
    },
  }
}

function Button() {
  const t = useTranslation()
  return t('button.confirm')
}

export default Button
