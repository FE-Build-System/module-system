(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['./notificationService'], factory);
  } else if (typeof module === 'object' && module.exports) {
    const notificationService = require('./notificationService');
    module.exports = factory(notificationService);
  } else {
    root.userService = factory(root.notificationService);
  }
}(this, function (notificationService) {
  function createUser(name) {
    const user = { id: Date.now(), name };
    notificationService.sendWelcomeEmail(user);
    return user;
  }

  function getUserProfile(userId) {
    return { id: userId, email: 'user@example.com' };
  }

  return {
    createUser,
    getUserProfile
  };
}));