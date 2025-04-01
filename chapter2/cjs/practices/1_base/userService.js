function createUser(name) {
  return { id: Date.now(), name };
}

function getUserProfile(userId) {
  return { id: userId, email: 'user@example.com' };
}

module.exports = { createUser, getUserProfile };