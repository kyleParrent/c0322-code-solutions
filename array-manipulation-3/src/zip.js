/* exported zip */

function zip(first, second) {
  var newSmallArr = [];
  var newBigArr = [];
  var useLength = null;
  if (first.length >= second.length) {
    useLength = second.length;
  } else {
    useLength = first.length;
  }
  for (var i = 0; i < useLength; i++) {
    newSmallArr.push(first[i]);
    newSmallArr.push(second[i]);
    newBigArr.push(newSmallArr);
    newSmallArr = [];
  }
  return newBigArr;
}

// input: [name, date, time] [Obi, 2, 415, tree]
// output [[name, obi], [date, 2], [time, 415]]

// create a varible to store the new full array
// create a varible to store the new small array
// create a variable to decide what length to use
// create a condition that checks if the first array is greater or equal to the second if so
// set the second array length to the use length varible
// else use the first length
// create a loop that goes through the arrays till the use length
// push the first array index first then the second to the small array
// after this push the full small array to the big one
// reset the small array by setting it to empty
// once the loop finishes return the big array from the function
