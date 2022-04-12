/* exported defaults */

function defaults(target, source) {
  for (var y in source) {
    if (target[y] === undefined) {
      target[y] = source[y];
    }
  }
  return target;
}

// input: {key1: 3} {key1: 4, key2: 6}
// output: { key1: 3, key2: 6 }

// create a for in loop to look through source
// create an if that checks if the source property in target equals undefined
// if it does then add it to the target with the source value
// return the target object from the function
