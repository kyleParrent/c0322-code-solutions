/* exported capitalizeWords */

function capitalizeWords(string) {
  var newS = string.splt(' ');
  var newWord = '';
  var newString = '';
  for (var e = 0; e < newS.length; e++) {
    newWord = newS[e] + ' ';
    newString += newWord[0].toUpperCase();
    for (var i = 1; i < newWord[e].length; i++) {
      newString += newWord[i].toLowerCase();
    }
  }
  return newString;
}

// if its a string do one thing and if its a list of words then split
// at the space and re add it to a new var and return  that
// {needs, solution}
