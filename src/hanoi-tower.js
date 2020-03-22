function recursivePyramide() {}

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let checker = 0;
  let result = {
    turns: 1,
    seconds: 0
  };
  while (checker < disksNumber - 1) {
    result['turns'] = result['turns'] * 2 + 1;
    checker++;
  }

  result['seconds'] = result['turns'] / (turnsSpeed / 3600);
  return result;
};
