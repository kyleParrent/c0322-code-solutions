/* exported firstChars */

function firstChars(length, string) {
  var newS = '';
  if (length > string.length - 1) {
    for (var ii = 0; ii < string.length; ii++) {
      newS += string[ii];
    }
  } else {
    for (var i = 0; i < length; i++) {
      newS += string[i];
    }
  }
  return newS;
}

// input: 3, 'hello'
// output: 'hel'

// create a variable for the new strin to output
// create an if statement that checks if the length is greater than the length of the string
// if so then use a for loop that runs the length of the string instead of the length given
// then add the chracter to the new string
// create a for statement that stops at the number given
// add each character of the string to the new string until it reaches the number needed
// return the new string
