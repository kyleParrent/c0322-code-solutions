/* exported titleCase */

function titleCase(title) {
  var newStrArr = title.split(' ');
  var newStr = '';
  var startTitle = null;
  for (var i = 0; i < newStrArr.length; i++) {
    var newWord = '';
    var oldWord = newStrArr[i];
    var lowerCased = '';
    for (var l = 0; l < oldWord.length; l++) {
      lowerCased += oldWord[l].toLowerCase();
    }
    for (var y = 0; y < lowerCased.length; y++) {
      if (startTitle === true) {
        newWord += lowerCased[y].toUpperCase();
        startTitle = false;
      } else if (y === 0) {
        newWord += lowerCased[y].toUpperCase();
      } else if (y - 1 === '-') {
        newWord += lowerCased[y].toUpperCase();
      } else {
        newWord += lowerCased[y].toLowerCase();
      }
    }
    if (newWord[newWord.length - 1] === ':') {
      startTitle = true;
    }
    if (i !== newStrArr.length - 1) {
      newStr += newWord + ' ';
    } else {
      newStr += newWord;
    }
  }
  return newStr;
}
