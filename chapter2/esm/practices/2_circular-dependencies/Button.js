import { useTranslation } from "./i18n.js"

export const i18nForButton = {
  ko: {
    submit: '제출'
  },
  en: {
    submit: 'submit',
  },
  jp: {
    submit: '提出'
  }
}

export default function Button() {
  useTranslation()
  return 'Button Code...'
}
