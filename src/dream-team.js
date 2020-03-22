module.exports = function createDreamTeam(members) {
  if (typeof members != 'object' || members == null) {
    return false;
  }

  let firstLetters = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      members[i] = members[i].trim();
      firstLetters.push(members[i][0].toUpperCase());
    }
  }

  return firstLetters.sort().join('');
};
