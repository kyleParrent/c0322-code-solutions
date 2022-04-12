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
  var indexUsed = [];
  var newCompare = '';
  for (var i = 0; i < newFirstString.length; i++) {
    for (var y = 0; y < newSecondString.length; y++) {
      if (newFirstString[i] === newSecondString[y]) {
        newCompare += newSecondString[y];
        for (var ind = 0; ind < indexUsed.length; ind++) {
          if (y === indexUsed[ind]) {
            isTrue = false;
            return isTrue;
          } else {
            indexUsed.push(y);
          }
        }
      }
    }
  }
  if (newFirstString === newCompare) {
    isTrue = true;
  } else {
    isTrue = false;
  }
  if (newFirstString.length !== newSecondString.length) {
    isTrue = false;
  }
  return isTrue;
}
