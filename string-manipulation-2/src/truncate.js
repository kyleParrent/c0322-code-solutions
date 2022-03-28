/* exported truncate */

function truncate(length, string) {
  var newS = '';
  if (length > string.length) {
    for (var i = 0; i < string.length; i++) {
      newS += string[i];
    }
  } else {
    for (var e = 0; e < length; e++) {
      newS += (string[e]);
    }
  }
  return newS + '...';
}

// input: (3, 'hello')
// output: 'hell...'

// create a new variable containing a empty string
// create an if statement that checks if the length given is greater than the length of the string given
// if it is then have a for staement to run only the length of the string
// then add the correct amount of charcaters to the new string
// else use the length given to decide how long the loop goes
// then add that amount of charcters to the new string
// return the new string with ... added to the end
