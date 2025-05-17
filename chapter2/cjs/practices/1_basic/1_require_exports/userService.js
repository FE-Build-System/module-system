const notificationService = require('./notificationService');

function createUser(name) {
  const user = { id: Date.now(), name };

  notificationService.sendWelcomeEmail(user);
  return user;
}

module.exports = { createUser };