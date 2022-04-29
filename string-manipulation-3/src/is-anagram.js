/* exported isAnagram */

function isAnagram(firstString, secondString) {
  var newFirstString = '';
  var isTrue = null;
  for (var t = 0; t < firstString.length; t++) {
    if (firstString[t] !== ' ') {
      newFirstString += firstString[t];
    }
  }
  var newSecondString = '';
  for (var s = 0; s < secondString.length; s++) {
    if (secondString[s] !== ' ') {
      newSecondString += secondString[s];
    }
  }
  var firstS = newFirstString.split('');
  var secondS = newSecondString.split('');
  for (var i = 0; i < firstS.length; i++) {
    for (var y = 0; y < secondS.length; y++) {
      if (firstS[i] === secondS[y]) {
        secondS.splice(y, 1);
        break;
      }
    }
  }
  if (secondS.length === 0) {
    isTrue = true;
  } else {
    isTrue = false;
  }
  return isTrue;
}

// input: 'the' 'teh'
// output: true

// create a varible to hold a new string
// create a varible to hold the final boolean value
// create a for loop that goes over the whole first string
// use an if statement to push all charactrs to the new string that are not a space
// make the same for loop for the second string
// split each of the new strings so each character has it's own index
// make a for loop that goes over the new array and inside make another loop that goes over the second array
// make an if steman that checks the first value of the first array to all the values of the second
// if the value is found remove it and break the function to move on to a new character in the first array
// if the second array has been fully deleetd then set the varible holding the boolean value to true else make it false
// return the boolean value from the function
