/* exported isAnagram */

function isAnagram(firstString, secondString) {
  var newFirstString = '';
  var isTrue = null;
  for (var t = 0; t < firstString.length; t++) {
    if (firstString[t] !== ' ') {
      newFirstString += firstString[t];
    }
  }
  var newSecondString = '';
  for (var s = 0; s < secondString.length; s++) {
    if (secondString[s] !== ' ') {
      newSecondString += secondString[s];
    }
  }
  var firstS = newFirstString.split('');
  var secondS = newSecondString.split('');
  for (var i = 0; i < firstS.length; i++) {
    for (var y = 0; y < secondS.length; y++) {
      if (firstS[i] === secondS[y]) {
        secondS.splice(y, 1);
      }
    }
  }
  return isTrue;
}
