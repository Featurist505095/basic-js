class VigenereCipheringMachine {
  encrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error();
    }

    let arrayStr = str.toUpperCase().split('');
    let arrayKey = key.toUpperCase().split('');
    let keyCounter = 0;
    let result = [];
    let firstCode = 65;

    for (let i = 0; i < arrayStr.length; i++) {
      if (
        arrayStr[i].charCodeAt() >= firstCode &&
        arrayStr[i].charCodeAt() <= 90
      ) {
        let strCode = arrayStr[i].charCodeAt() - firstCode;
        let keyCode = arrayKey[keyCounter].charCodeAt() - firstCode;
        let code = ((strCode + keyCode) % 26) + firstCode;
        result.push(String.fromCharCode(code));

        keyCounter++;
        if (keyCounter === arrayKey.length) {
          keyCounter = 0;
        }
      } else {
        result.push(arrayStr[i]);
      }
    }

    return result.join('');
  }

  decrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error();
    }

    let arrayStr = str.toUpperCase().split('');
    let arrayKey = key.toUpperCase().split('');
    let keyCounter = 0;
    let result = [];
    let firstCode = 65;

    for (let i = 0; i < arrayStr.length; i++) {
      if (
        arrayStr[i].charCodeAt() >= firstCode &&
        arrayStr[i].charCodeAt() <= 90
      ) {
        let strCode = arrayStr[i].charCodeAt() - firstCode;
        let keyCode = arrayKey[keyCounter].charCodeAt() - firstCode;
        let code = ((strCode - keyCode) % 26) + firstCode;
        code = code < 65 ? code + 26 : code;

        result.push(String.fromCharCode(code));

        keyCounter++;
        if (keyCounter === arrayKey.length) {
          keyCounter = 0;
        }
      } else {
        result.push(arrayStr[i]);
      }
    }

    return result.join('');
  }
}

module.exports = VigenereCipheringMachine;
