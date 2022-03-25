/* exported isVowel */

function isVowel(char) {
  char = char.toUpperCase();
  if (char === 'A') {
    return true;
  } else if (char === 'E') {
    return true;
  } else if (char === 'O') {
    return true;
  } else if (char === 'U') {
    return true;
  } else if (char === 'I') {
    return true;
  } else {
    return false;
  }
}

// input: 'A'
// output: true

// create an if statement that checks if the char given is equal to a vowel
// the char can be equal to uppercase or lower case
// return true if it matches the condition
// create an else if with the same condition but a different vowel
// create else if staements the same way for the rest of the vowels
// lastly have an else that returns the function false if none of the other conditions are met
