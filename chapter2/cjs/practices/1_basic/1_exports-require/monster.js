const alertService = require('./alert.js');

function summonMonster(name) {
  const monster = { id: Date.now(), name };
  alertService.sendSummonAlert(monster);
  console.log(`from ${__filename}`)
  return monster;
}

function getMonsterById(id) {
  return { id, name: 'Goblin' };
}

module.exports = { summonMonster, getMonsterById };