/* exported takeRight */

function takeRight(array, count) {
  var newArr = [];
  if (array.length < count) {
    for (var ii = 0; ii < array.length; ii++) {
      newArr.push(array[ii]);
    }
  } else {
    for (var i = (array.length) - count; i < array.length; i++) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

// input: [6,3,5,7,8], 3
// output: [5,7,8]

// create a variable for an empty array
// create an if statement that checks if the count is greater than the array's length
// if true the make a for loop that goes through the whole array and pushes the values to new array
// else make a for loop that starts at the array's length minus the count given
// push each index into the new array
// at the end return the new array
