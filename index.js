function reversString(str) {
    let reversString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversString += str[i];
    }
    return reversString;
  }
  module.exports = reversString;