const userService = require('./modules/userService.js');

const newUser = userService.createUser("Hackurity");
console.log("Created user:", newUser);