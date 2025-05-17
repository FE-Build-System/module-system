import ko  from './ko.mjs'
import en  from './en.mjs'


const resources = {}

function initI18n() {
  resources['ko'] = ko
  resources['en'] = en
}

function translate(key) {
  return resources['ko'][key] || key
}

export default { initI18n, translate }