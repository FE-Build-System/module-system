import { getUserProfile } from "./userService.mjs"; // 여기서 순환 참조 발생

export function sendWelcomeEmail(user) {
  console.log(`Sending welcome email to ${user.name}`);
  // 환영 이메일 전송 후, 사용자 프로필 정보를 추가로 조회
  // 만약 userService의 getUserProfile이 아직 초기화되지 않았다면 에러 발생
  const profile = getUserProfile(user.id);
  console.log("Fetched user profile:", profile);
}
