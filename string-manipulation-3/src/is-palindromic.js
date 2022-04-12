/* exported isPalindromic */

function isPalindromic(string) {
  var newString = '';
  for (var y = 0; y < string.length; y++) {
    if (string[y] !== ' ') {
      newString += string[y];
    }
  }
  var newWord = '';
  var isTrue = null;
  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') {
      newWord += string[i];
    }
  }
  if (newWord === newString) {
    isTrue = true;
  } else {
    isTrue = false;
  }
  return isTrue;
}

// input: 'cars'
// output: false

// create a varible for the new string without spaces
// create a for loop that goes through the string
// if the index does not equal a space then add it to the new string
// in the function create a varble for the reversed word
// create a variable for whether the word is equal or not(true or false)
// create a for loop that starts at the end of the string and goes back
// if the index does not equal a space then add it to the new word
// create an if statement that checks if the new string is equal to the new word and depending on the outcome change the
// varible for keeping track of this to either true or false
// return the varible for true or false from the function
