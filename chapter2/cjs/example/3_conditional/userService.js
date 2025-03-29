function createUser(name) {
  const user = { id: Date.now(), name };

  if (process.env.SEND_NOTIFICATION === 'true') {
    const notificationService = require('./notificationService.js');
    notificationService.sendWelcomeEmail(user);

    return user
  }
  console.log("Notification is disabled.");
  
  return user;
}

function getUserProfile(userId) {
  return { id: userId, email: 'user@example.com' };
}

module.exports = { createUser, getUserProfile };