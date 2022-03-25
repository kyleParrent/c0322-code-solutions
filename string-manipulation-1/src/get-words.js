/* exported getWords */

function getWords(string) {
  var newWord = [];
  if (string === '') {
    return newWord;
  } else {
    newWord = string.split(' ');
    return newWord;
  }
}

// input: 'hello there general'
// output: ['hello', 'there', 'general']

// create a new varible with an empty string assign
// create an if staement that checks if the string is empty
// if it is then return the new varible
// else spit at the spaces in the sentence and put that into the new varible
// return the new varible
