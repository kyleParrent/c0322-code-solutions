/* exported tail */

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// input: [3,76,12,4,8]
// output: [76,12,4,8]

// create a new varible with an epmty array assign
// create a for loop that starts after the first index and goes to the end
// push the array at i to the new array created
// return the new array at the end
