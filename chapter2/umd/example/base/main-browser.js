require.config({
  baseUrl: 'lib',
  paths: {
    notificationService: '../modules/notificationService',
    userService: '../modules/userService'
  }
});

require(['userService'], function(userService) {
  const newUser = userService.createUser("Hackurity");
  console.log("Created user:", newUser);
});