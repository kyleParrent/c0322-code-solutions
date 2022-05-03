/* exported titleCase */

function titleCase(title) {
  var newStrArr = title.split(' ');
  var newStr = '';
  var startTitle = null;
  var updateWord = ['And', 'Or', 'Nor', 'But', 'A', 'An', 'The', 'As', 'At', 'By', 'For', 'In', 'Of', 'On', 'Per', 'To', 'Javascript', 'Api', 'Javascript:', 'Api:'];
  var updatedWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'JavaScript', 'API', 'JavaScript:', 'API:'];
  for (var i = 0; i < newStrArr.length; i++) {
    var newWord = '';
    var oldWord = newStrArr[i];
    var lowerCased = '';
    for (var l = 0; l < oldWord.length; l++) {
      if (l === 0) {
        lowerCased += oldWord[l].toUpperCase();
      } else {
        lowerCased += oldWord[l].toLowerCase();
      }
    }
    for (var t = 0; t < updateWord.length; t++) {
      if (lowerCased === updateWord[t]) {
        lowerCased = updatedWords[t];
      }
    }
    for (var y = 0; y < lowerCased.length; y++) {
      if (startTitle === true) {
        newWord += lowerCased[y].toUpperCase();
        startTitle = false;
      } else if (lowerCased[y - 1] === '-') {
        newWord += lowerCased[y].toUpperCase();
      } else if (i === 0 && y === 0) {
        newWord += lowerCased[y].toUpperCase();
      } else {
        newWord += lowerCased[y];
      }
    }
    if (newWord[newWord.length - 1] === ':') {
      startTitle = true;
    }
    if (i !== newStrArr.length - 1) {
      newStr += newWord + ' ';
    } else {
      newStr += newWord;
    }
  }
  return newStr;
}

// input 'HeLLo: mY name IS javascriPT'
// output 'Hello: My Name is JavaScript

// create an new varible holding the spit string
// create a new varible for holding each word in the split string after its been corrected
// create a varible to hold a boolean to check if the last word enetred ended with a colon
// create an array that holds the execption words
// create an array to hold the updated exection words
// create a for loop that goes over the new split string
// create a varible to hold the uncorrected word
// create a varible to hold the fully uncorrected word
// make a varible that will hold the word when is all been lower cased
// make a for loop that uppercases the first letter of the old word and lower cases the rest of the indexes after
// make another for loop under the last that now goes through the expection words
// if the current changed word matches the expection word then make its value equal to the updated expection word
// create another for loop under the last that goes over the previous word
// have conditions that check if the word that came before it ended in a semicolon by checking the boolean varible
// if true then upper case the first charcater and reset the boolean varible to false
// have another condition that uppercases the character if the previous character was a dash
// make anoither condition that checks if the index is the first word and the first letter, if true the uppercase that character
// else just push the cyrrent characetr to the next new word varible
// have a condition that checks to see if the new word ends in a colon, if true set the boolean varible to true
// create another condition that cheack to see if the current word is not the last in the index
// if true then add a space and push if to the new array, else just push it to the new array
// once the function completes return the new array from the function
