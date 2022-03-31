/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var newS = '';
  for (var i = 0; i < string.length; i++) {
    if (i === secondIndex) {
      newS += string[firstIndex];
    } else if (i === firstIndex) {
      newS += string[secondIndex];
    } else {
      newS += string[i];
    }
  }
  return newS;
}

// input: 0, 3, 'hello'
// output: lhelo

// create a new varible for the new String
// create a for loop to go through the entire string
// create an if statement that checks if current index is equal to second index given
// if true the add the first index value to the new string
// else if current index equals the first index
// add the second given index to the new string
// else add the current index value to the string
// return the string from the function
