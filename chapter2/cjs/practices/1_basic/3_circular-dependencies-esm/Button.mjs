import { useTranslation } from './i18n'

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
  return t('confirm')
}

export default Button
