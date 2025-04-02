const notificationService = require("./notificationService.js");

function createUser(name) {
  const user = { id: Date.now(), name };

  notificationService.sendWelcomeEmail(user);
  return user;
}

function getUserProfile(userId) {
  return { id: userId, email: "user@example.com" };
}

module.exports = { createUser, getUserProfile };
