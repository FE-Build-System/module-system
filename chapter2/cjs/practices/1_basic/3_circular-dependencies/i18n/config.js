const ko = require('./ko')
const en = require('./en')

const resources = {}

function initI18n() {
  resources['ko'] = ko
  resources['en'] = en
}

function translate(key) {
  const parts = key.split('.');
  return parts.reduce((acc, part) => acc?.[part], resources['ko']) || key;
}

module.exports = {
  initI18n,
  translate,
}
