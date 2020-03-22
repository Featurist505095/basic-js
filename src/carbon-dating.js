const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(str) {
  let strNumber = parseFloat(str);

  if (typeof str !== 'string') {
    return false;
  }

  if (strNumber > 0 && strNumber < MODERN_ACTIVITY) {
    return Math.ceil(
      Math.log(MODERN_ACTIVITY / strNumber) / (0.693 / HALF_LIFE_PERIOD)
    );
  } else {
    return false;
  }
};
