/* exported compact */

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  } return newArray;
}

// input: [true, false, true]
// output: [true, true]

// create a new variblw with an empty array
// make a for statement that goes through the whole array
// make an if statement that checks to see if the array at index i is a banned value
// if its not then push it to the new array
// return the new array
