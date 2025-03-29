const userService = require('./userService.js');

const newUser = userService.createUser("Hackurity");
console.log("Created user:", newUser);