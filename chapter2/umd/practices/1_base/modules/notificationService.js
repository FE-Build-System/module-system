(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory); // AMD
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(); // CommonJS
  } else {
    root.notificationService = factory(); // 브라우저 전역
  }
}(this, function () {
  function sendWelcomeEmail(user) {
    console.log(`Sending welcome email to ${user.name}`);
  }

  return {
    sendWelcomeEmail
  };
}));