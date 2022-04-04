/* exported pick */

function pick(source, keys) {
  var newObj = {};
  for (var x in source) {
    for (var i = 0; i < keys.length; i++) {
      if (x === keys[i] && source[keys[i]] !== undefined) {
        newObj[x] = source[keys[i]];
      }
    }
  }
  return newObj;
}
