export function createUser(name) {
  return { id: Date.now(), name };
}

export function getUserProfile(userId) {
  return { id: userId, email: 'user@example.com' };
}
