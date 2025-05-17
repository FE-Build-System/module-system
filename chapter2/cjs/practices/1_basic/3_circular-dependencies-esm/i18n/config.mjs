import ko  from './ko'
import en  from './en'


const resources = {}

export function initI18n() {
  resources['ko'] = ko
  resources['en'] = en
}

export function translate(key) {
  return resources['ko'][key] || key
}
