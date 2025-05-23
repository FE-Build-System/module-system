import { useTranslation } from './i18n/index.mjs'

export const ButtonI18n = {
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

export default Button
