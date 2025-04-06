import userService from './userService.mjs';

const user = userService.createUser("Rafael");
console.log("Created user:", user);
console.log("Found User:", userService.getUserProfile(user.id));
