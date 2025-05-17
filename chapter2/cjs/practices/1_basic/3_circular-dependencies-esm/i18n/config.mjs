import ko  from './ko.mjs'
import en  from './en.mjs'


const resources = {}

export function initI18n() {
  resources['ko'] = ko
  resources['en'] = en
}

export function translate(key) {
  return resources['ko'][key] || key
}
