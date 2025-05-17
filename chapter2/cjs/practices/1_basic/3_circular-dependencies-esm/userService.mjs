import { sendWelcomeEmail } from "./notificationService.mjs";

export function createUser(name) {
  const user = { id: Date.now(), name };
  sendWelcomeEmail(user);
  return user;
}

export function getUserProfile(userId) {
  return { id: userId, email: "user@example.com" };
}
