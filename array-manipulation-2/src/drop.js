/* exported drop */

function drop(array, count) {
  var newArr = [];
  for (var i = count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}

// input: [2,5,3,7,8,9], 4
// output: [8,9]

// create a new variable for an empty array
// create a for statment that starts at the count and goes to the end
// push the current index of the array to the new array
// at the end return the value of the new array
