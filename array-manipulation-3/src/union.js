/* exported union */

function union(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    if (newArr.includes(first[i]) === false) {
      newArr.push(first[i]);
    }
  }
  for (var u = 0; u < second.length; u++) {
    if (newArr.includes(second[u]) === false) {
      newArr.push(second[u]);
    }
  }
  return newArr;
}

// input [4,6,7] [8,6,4]
// output [4,6]

// create a variable to put the new array values
// create a for loop that goes the length of the first array
// create a condition that checks to see if the new array contains the current index in first
// if not then push the value to the new array
// create another for loop to go the length of the second array
// create a condition that checks to see if the new array contains the current index in second
// if not then push the value to the new array
// once the loops finish push the values to the new array
