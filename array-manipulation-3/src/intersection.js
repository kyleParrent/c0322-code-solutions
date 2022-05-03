/* exported intersection */

function intersection(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i]) === true && newArr.includes(first[i]) === false) {
      newArr.push(first[i]);
    }
  }
  for (var u = 0; u < second.length; u++) {
    if (first.includes(second[u]) === true && newArr.includes(second[u]) === false) {
      newArr.push(second[u]);
    }
  }
  return newArr;
}

// input [2,1,3] [2,4,3,6]
// output [2,3]

// create a variable for the new values to be pushed
// create a for loop that goes the length of the first array
// create a condition that checks to see if the current index of first is included in second and
// a condition that makes sure its not included in the newly created array yet
// if true then push the current index to the new array
// repeat previous steps for the second array by creating a for loop going the length of the second array
// make a condition that checks to see if the current index of second is included in first and
// a condition that makes sure its not included in the newly created array yet
// if true then push the current index to the new array
// once loops are complete return the new array from the function
