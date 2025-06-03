function createUser(name) {
  const user = { id: Date.now(), name };
  
  if (process.env.SEND_NOTIFICATION === 'true') {
    const notificationService = require('./notificationService.js');
    notificationService.sendWelcomeEmail(user);
  }

  return user;
}

module.exports = { createUser };