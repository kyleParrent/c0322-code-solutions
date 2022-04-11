/* exported chunk */

function chunk(array, size) {
  var newSmallArr = [];
  var newArr = [];
  var counter = 0;
  var iterations = 0;
  for (var i = 0; i < array.length; i += size) {
    counter += size;
    if (counter > array.length) {
      for (var t = size * iterations; t < array.length; t++) {
        newSmallArr.push(array[t]);
      }
      newArr.push(newSmallArr);
      return newArr;
    } else {
      for (var ii = i; ii < size + i; ii++) {
        newSmallArr.push(array[ii]);
      }
    }
    iterations++;
    newArr.push(newSmallArr);
    newSmallArr = [];
  }
  return newArr;
}

// input: [2,4,6,4,9], 3
// output: [[2,4,6], [4,9]]

// create a new array to contain the chunk
// create a new array to contain the mutiple chunks
// create a variable counter to keep track of how many indexs have been used
// create a variable for the amount of chunks that have been made
// create a for loop that goes through the array at chunk length intervals
// add the size given to the counter to update index's used
// have an if staement to check if the index's to be used is greater than number avaiable
// if true then have a for loop, starting at the iterations times the chunk length and
// push the remaining indexs to the small array then the big one
// have this be the end for that condition and return the new big array from the function
// else make a for loop that strts at the same place as the first loop and goes till the size times 2
// push each index into the small array and once this finishes push the small array to the big one
// add 1 to the iterations and reset the small array value to empty
// once the first loop is done return the big array from the function
