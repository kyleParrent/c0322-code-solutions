/* exported isUpperCased */

function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}

// input: 'Hello'
// output: false

// create a for loop that starts at the beginning of the word and stops at end
// create an if statment that compares the word at index i to the same but toUpperCase
// if its not equal return the function false
// if it runs to the end return the function true
