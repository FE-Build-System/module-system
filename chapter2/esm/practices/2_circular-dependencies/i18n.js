import ko from './ko.js'
import en from './en.js'
import jp from './jp.js'

export const i18nInstance = (() => ({
  resources: {
    ko,
    jp,
    en
  }
}))()


export const useTranslation = () => {
  return {}
}