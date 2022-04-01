/* exported lastChars */

function lastChars(length, string) {
  var newS = '';
  if (length > string.length - 1) {
    for (var ii = 0; ii < string.length; ii++) {
      newS += string[ii];
    }
  } else {
    for (var i = (string.length) - length; i < string.length; i++) {
      newS += string[i];
    }
  }
  return newS;
}

// input: 3, 'hello'
// output: 'llo'

// make a variable for the new string to be placed
// start an if stement that checks if the length given is more than the length of the string
// if true then make a for loop that goes through the whole string and adds each charcter to the new string
// else make a for look that starts at the length of the string minus the length given
// and the loop stops at the length of the string
// add each letter to the new string
// at the end return the new string
