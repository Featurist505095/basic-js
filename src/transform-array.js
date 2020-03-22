module.exports = function transform(arr) {
  arr.push();
  let modifiedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      i++;
    } else {
      if (arr[i] === '--discard-prev') {
        modifiedArray.pop();
      } else {
        if (arr[i] === '--double-next') {
          if (arr[i + 1] != undefined) modifiedArray.push(arr[i + 1]);
        } else {
          if (arr[i] === '--double-prev') {
            if (arr[i - 1] != undefined) modifiedArray.push(arr[i - 1]);
          } else {
            if (arr[i] != 'undefined') {
              modifiedArray.push(arr[i]);
            }
          }
        }
      }
    }
  }

  return modifiedArray;
};
