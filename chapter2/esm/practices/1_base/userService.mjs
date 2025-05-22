import notificationService from './notificationService.mjs'

export function createUser(name) {
  const user = { id: Date.now(), name };

  notificationService.sendWelcomeEmail(user);
  return user;
}