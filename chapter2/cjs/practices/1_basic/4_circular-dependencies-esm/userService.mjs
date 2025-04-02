import { sendWelcomeEmail } from "./notificationService.mjs";

export function createUser(name) {
  const user = { id: Date.now(), name };
  // 사용자 생성 후, 환영 이메일 전송
  // 이때 notificationService 내부에서 userService.getUserProfile을 호출할 수 있음
  sendWelcomeEmail(user);
  return user;
}

export function getUserProfile(userId) {
  return { id: userId, email: "user@example.com" };
}
