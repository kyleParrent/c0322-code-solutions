/* exported capitalizeWords */

function capitalizeWords(string) {
  var newS = string.split(' ');
  var newWord = '';
  var newString = '';
  for (var e = 0; e < newS.length; e++) {
    newWord = newS[e];
    newString += newWord[0].toUpperCase();
    for (var i = 1; i < newWord.length; i++) {
      newString += newWord[i].toLowerCase();
    }
    for (var o = 1; o < newS.length; o++) {
      newString += ' ';
    }
  }
  return newString;
}

// input: 'hello toM, whAt up'
// output: 'Hello Tom, What Up'

// take the string and spilt it up into pieces at the space
// create a varible for the word to go
// create a varible for the new captized string
// create a for loop to grab each index in the new split array
// change the first index on that word to caplictal
// loop through the rest of the string making everything toLowerCase
// push the new word to the new string
