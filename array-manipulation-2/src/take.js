/* exported take */

function take(array, count) {
  var newArr = [];
  if (array.length < count) {
    for (var ii = 0; ii < array.length; ii++) {
      newArr.push(array[ii]);
    }
  } else {
    for (var i = 0; i < count; i++) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

// input: [2,7,3,9], 3
// output: [2,7,3]

// create an empty array for the new index to be stored
// cretae a for loop that goes through the array until it reachers the count
// add each index value to the new array
// return the new array from the function
