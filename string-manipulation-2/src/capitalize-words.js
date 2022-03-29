/* exported capitalizeWords */

function capitalizeWords(string) {
  var newS = string.splt(' ');
  var newWord = '';
  for (var e = 0; e < newS.length; e++) {
    for (var i = 1; i < string.length; i++) {
      newWord += newS[0].toUpperCase();
      newWord += newS[i].toLowerCase();
    }
  }
  return newWord;
}

// if its a string do one thing and if its a list of words then split
// at the space and re add it to a new var and return  that
// {needs, solution}
