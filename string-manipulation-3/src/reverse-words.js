/* exported reverseWords */

function reverseWords(string) {
  var newStrArr = string.split(' ');
  var newStr = '';
  for (var i = 0; i < newStrArr.length; i++) {
    var newWord = '';
    for (var y = newStrArr[i].length - 1; y >= 0; y--) {
      var oldWord = newStrArr[i];
      newWord += oldWord[y];
    }
    if (i !== newStrArr.length - 1) {
      newStr += newWord + ' ';
    } else {
      newStr += newWord;
    }
  }
  return newStr;
}
