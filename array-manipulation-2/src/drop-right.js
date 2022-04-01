/* exported dropRight */

function dropRight(array, count) {
  var newArr = [];
  for (var i = 0; i < (array.length) - count; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}

// input: [2,5,8,5,3,4], 3
// output: [2,5,8]

// create a new variable to put an empty array
// create a for loop that goes till the array length minus the count given
// push each index's value to the new array
// at the end return the new array from the function
