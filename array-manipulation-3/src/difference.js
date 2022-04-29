/* exported difference */

function difference(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i]) === false) {
      newArr.push(first[i]);
    }
  }
  for (var u = 0; u < second.length; u++) {
    if (first.includes(second[u]) === false) {
      newArr.push(second[u]);
    }
  }
  return newArr;
}

// input [3,6,4,8,2] [0,4,8,9,1]
// output [3,6,2,0,9,1]

// create a new varible to store the unique values
// create a loop that goes through the first given array
// create a condition that checks if the current index is inclued in the second array
// if its not then push it to the new array for unique values
// create a second loop that does the same thing except for the second arrays length and comparing
// aginst the first in the condition
// once both loops are completed return the new array from the function
