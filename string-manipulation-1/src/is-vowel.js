/* exported isVowel */

function isVowel(char) {
  if (char === 'a' || char === 'A') {
    return true;
  } else if (char === 'e' || char === 'E') {
    return true;
  } else if (char === 'o' || char === 'O') {
    return true;
  } else if (char === 'u' || char === 'U') {
    return true;
  } else if (char === 'i' || char === 'I') {
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
