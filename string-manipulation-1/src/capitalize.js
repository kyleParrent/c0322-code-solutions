/* exported capitalize */

function capitalize(word) {
  var newW = '';
  newW += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newW += word[i].toLowerCase();
  }
  return newW;
}

// input: 'heLLo'
// output: 'Hello'

// create a varible with an empty string
// make character at index 0 uppercase and move it to the string
// create a for loop that starts after the first index and goes to the end
// make an if statement and if the word at index i is equal to uppercase make it
// toLowerCase and add it to the string
// else just add the character to the string
// at the end return the new varble
