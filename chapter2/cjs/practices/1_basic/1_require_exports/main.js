const userService = require('./userService');

const newUser = userService.createUser("Hackurity");
console.log("Created user:", newUser);