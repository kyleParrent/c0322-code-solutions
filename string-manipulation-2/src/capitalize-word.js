/* exported capitalizeWord */

function capitalizeWord(word) {
  var newWord = '';
  newWord += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }
  if (newWord === 'Javascript') {
    newWord = 'JavaScript';
  }
  return newWord;
}

// create a variable and assign it an empty String
// take the new string and add a capitalized first index
// create a for loop that strats after the first index and goes till the end of the string
// add the index i to the string with toLowerCase
// check if string is javascript
// if so set it as JavaScript
// return the new string
