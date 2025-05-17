import { getUserProfile } from "./userService.mjs";

export function sendWelcomeEmail(user) {
  console.log(`Sending welcome email to ${user.name}`);
  const profile = getUserProfile(user.id);
  console.log("Fetched user profile:", profile);
}
