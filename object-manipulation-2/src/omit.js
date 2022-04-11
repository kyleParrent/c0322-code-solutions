/* exported omit */

function omit(source, keys) {
  var newObj = {};
  for (var i = 0; i < keys.length; i++) {
    for (var x in source) {
      if (x !== keys[i]) {
        newObj[x] = source[x];
      }
    }
  }
  return newObj;
}

// can't figure how to keep keys previously cycled through from being addded. in the next compariosn. or since the
// the compariosn will add all keys not currently being compared it will add the next key to be excluded when doing the first compariosn.