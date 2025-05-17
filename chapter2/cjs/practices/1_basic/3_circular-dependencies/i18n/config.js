const ko = require('./ko')
const en = require('./en')

const resources = {}

function initI18n() {
  resources['ko'] = ko
  resources['en'] = en
}

function translate(key) {
  return resources['ko'][key] || key
}

module.exports = {
  initI18n,
  translate,
}
