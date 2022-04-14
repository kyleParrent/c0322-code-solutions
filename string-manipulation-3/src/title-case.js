/* exported titleCase */

function titleCase(title) {
  var newStrArr = title.split(' ');
  var newStr = '';
  for (var i = 0; i < newStrArr.length; i++) {
    var newWord = '';
    for (var y = 0; y < newStrArr[i].length; y++) {
      var oldWord = newStrArr[i];
      if (y === 0) {
        newWord += oldWord[y].toUpperCase();
      } else if (y - 1 === '-') {
        newWord += oldWord[y].toUpperCase();
      } else if (oldWord.length <= 3) {
        newWord += oldWord[y].toLowerCase();
      } else {
        newWord += oldWord[y].toLowerCase();
      }
    }
    if (i !== newStrArr.length - 1) {
      newStr += newWord + ' ';
    } else {
      newStr += newWord;
    }
  }
  return newStr;
}
