/* exported ransomCase */

function ransomCase(string) {
  var newWord = '';
  for (var i = 0; i < string.length; i++) {
    if ((i % 2) === 0) {
      newWord += string[i].toLowerCase();
    } else {
      newWord += string[i].toUpperCase();
    }
  }
  return newWord;
}

// input: 'hELLo'
// output: 'hElLo'

// create a variable for the new string to be placed
// make a for statement that goes to the end of the string
// create an if statement that checks if the current index is divisible by 2 with no remainder
// if true then make the letter toLowerCase and add it to the string
// else make it upper case and add it to the string
// at the end of the function return the string
