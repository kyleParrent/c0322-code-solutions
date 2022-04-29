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
