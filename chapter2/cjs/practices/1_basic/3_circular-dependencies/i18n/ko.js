const { ButtonI18n } = require('../Button')

console.log(ButtonI18n)

const lang = {
  common: {
    back: '뒤로가기',
  },
  button: { ...ButtonI18n.ko },
}

module.exports = lang