/* exported initial */

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// input: [2,34,5,12]
// output: [2,34,5]

// create a new variable with an empty array assigned
// create a for statement that goes till it reaches one less than the last index
// push the array at i into the new array
// return the new array from the function
