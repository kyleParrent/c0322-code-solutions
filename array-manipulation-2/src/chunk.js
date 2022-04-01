/* exported chunk */

function chunk(array, size) {
  var newSmallArr = [];
  var newArr = [];
  var counter = 0;
  for (var i = 0; i < array.length; i += size) {
    counter += size;
    if (counter > array.length) {
      for (var t = size; t < array.length; t++) {
        newSmallArr.push(array[t]);
      }
      return newArr;
    } else {
      for (var ii = i; ii < size + i; ii++) {
        newSmallArr.push(array[ii]);
      }
    }
    newArr.push(newSmallArr);
    newSmallArr = [];
  }
  return newArr;
}
