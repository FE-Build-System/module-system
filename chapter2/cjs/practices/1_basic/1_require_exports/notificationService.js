const template = require('./mail-template')

function sendWelcomeEmail(user) {
  console.log(`
    Sending welcome email to ${user.name},
    from ${template.from}`
  );
}

module.exports = { sendWelcomeEmail };