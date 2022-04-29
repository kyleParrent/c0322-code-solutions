/* exported equal */

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

// input [1,5,3,6,7] [1,5,3,6,7]
// output true

// create a if stement that checks to see if the length of the two given arrays are equal
// if not return false from the function
// create a for loop that goes over the first array
// create an if statemnt that checks if the current index of the first array doesnt match the current index of the second
// if true the return false from the function
// if the for loop rus competely then return true from the function
