import ko  from './ko.mjs'
import en  from './en.mjs'


const resources = {}

function initI18n() {
  resources['ko'] = ko
  resources['en'] = en
}

function translate(key) {
  const parts = key.split('.');
  return parts.reduce((acc, part) => acc?.[part], resources['ko']) || key;
}

export default { initI18n, translate }