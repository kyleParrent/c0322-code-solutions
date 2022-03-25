/* exported reverseWord */

function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}

// input : 'olleh'
// output: 'hello'

// create a new varible that contains an empty string
// // create a for statement that starts at the end of the word and moves back
// add the letter at index i to the new varible
// return the new varible from the function
