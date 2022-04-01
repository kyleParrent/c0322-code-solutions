/* exported numVowels */

function numVowels(string) {
  var vowCount = 0;
  for (var i = 0; i < string.length; i++) {
    var letter = string[i].toLowerCase();
    if (letter === 'a') {
      vowCount++;
    } else if (letter === 'e') {
      vowCount++;
    } else if (letter === 'i') {
      vowCount++;
    } else if (letter === 'o') {
      vowCount++;
    } else if (letter === 'u') {
      vowCount++;
    }
  }
  return vowCount;
}

// imput: 'All Code All Day'
// output: 5

// create a var for number of vowel and set it to zero
// make a for statement that looks through the whole string
// make a varible to store the current letter of the string and make in lower or upper case
// start multple if statments that check if the current letter is equal to a vowel
// if it is then add one to the counter
// after checking if each letter matches a vowel return the counter for the vowel
