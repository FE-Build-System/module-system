const { ButtonI18n } = require('../ButtonI18n')

console.log(ButtonI18n)

const lang = {
  common: {
    back: '뒤로가기',
  },
  button: { ...ButtonI18n.ko },
}

module.exports = lang