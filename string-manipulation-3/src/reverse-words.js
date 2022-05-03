/* exported reverseWords */

function reverseWords(string) {
  var newStrArr = string.split(' ');
  var newStr = '';
  for (var i = 0; i < newStrArr.length; i++) {
    var newWord = '';
    for (var y = newStrArr[i].length - 1; y >= 0; y--) {
      var oldWord = newStrArr[i];
      newWord += oldWord[y];
    }
    if (i !== newStrArr.length - 1) {
      newStr += newWord + ' ';
    } else {
      newStr += newWord;
    }
  }
  return newStr;
}

// input 'hello there'
// output: 'olleh ereht'

// split the string into a new array
// set an empty string for the new words to be arranged
// create a for loop that goes over the spit array
// create a new varible for the word in the array
// create another for loop that goes over the first index in the array backwards
// create a varible to hold the old word and push the last index first into the new word
// create an if staement that checks if the current word is the last index
// if it isnt then add a space to the end and push it to the new string else just push it to the new string
// return the new string from the function
