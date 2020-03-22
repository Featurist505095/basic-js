function additionRepeater(
  addition,
  additionRepeatTimes = 0,
  additionSeparator
) {
  let subResult = '';
  if (additionRepeatTimes > 0) {
    for (let i = 0; i < additionRepeatTimes - 1; i++) {
      subResult += `${addition}${additionSeparator}`;
    }

    subResult += `${addition}`;
  }

  return subResult;
}

module.exports = function repeater(
  str,
  {
    repeatTimes = 1,
    separator = '+',
    addition,
    additionRepeatTimes,
    additionSeparator = '|'
  }
) {
  if (addition !== undefined && additionRepeatTimes === undefined) {
    additionRepeatTimes = 1;
  }
  let result = '';
  for (let i = 0; i < repeatTimes - 1; i++) {
    result += `${str}`;
    result += `${additionRepeater(
      addition,
      additionRepeatTimes,
      additionSeparator
    )}`;
    result += `${separator}`;
  }

  result += `${str}${additionRepeater(
    addition,
    additionRepeatTimes,
    additionSeparator
  )}`;

  return result;
};
