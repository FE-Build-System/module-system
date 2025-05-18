(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.notificationService = factory();
  }
}(this, function () {
  function sendWelcomeEmail(user) {
    console.log(`Sending welcome email to ${user.name}`);
  }

  return {
    sendWelcomeEmail
  };
}));