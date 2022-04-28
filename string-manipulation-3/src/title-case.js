/* exported titleCase */

function titleCase(title) {
  var newStrArr = title.split(' ');
  var newStr = '';
  var startTitle = null;
  var updateWord = ['And', 'Or', 'Nor', 'But', 'A', 'An', 'The', 'As', 'At', 'By', 'For', 'In', 'Of', 'On', 'Per', 'To', 'Javascript', 'Api', 'Javascript:', 'Api:'];
  var updatedWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'JavaScript', 'API', 'JavaScript:', 'API:'];
  for (var i = 0; i < newStrArr.length; i++) {
    var newWord = '';
    var oldWord = newStrArr[i];
    var lowerCased = '';
    for (var l = 0; l < oldWord.length; l++) {
      if (l === 0) {
        lowerCased += oldWord[l].toUpperCase();
      } else {
        lowerCased += oldWord[l].toLowerCase();
      }
    }
    for (var t = 0; t < updateWord.length; t++) {
      if (lowerCased === updateWord[t]) {
        lowerCased = updatedWords[t];
      }
    }
    for (var y = 0; y < lowerCased.length; y++) {
      if (startTitle === true) {
        newWord += lowerCased[y].toUpperCase();
        startTitle = false;
      } else if (lowerCased[y - 1] === '-') {
        newWord += lowerCased[y].toUpperCase();
      } else if (i === 0 && y === 0) {
        newWord += lowerCased[y].toUpperCase();
      } else {
        newWord += lowerCased[y];
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
