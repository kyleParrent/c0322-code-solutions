/* exported reverse */

function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

// input: [1,2,3,4,5]
// output: [5,4,3,2,1]

// create a new varible containing an empty array
// create a for statement that starts at the last index and goes down to 0
// push the array at i into the new array
// return the value of the new array
