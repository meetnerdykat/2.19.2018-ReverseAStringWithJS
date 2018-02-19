// Everything with the two forward slashes is notes and NOT part of the program's code that makes it
// actually work, notes are a reminder for programmers only :)
// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

// Create Our Function
function reverseString(str) {
  // the line above this comment creates the function
  const strArr = str.split(""); // this line splits the word hello into individual chars
  strArr.reverse(); // this line reverses those chars
  return strArr.join(""); // this line gets rid of the commas
}

// Call the Function
const output = reverseString("hello"); // this line creates a variable named output
console.log(output); //this line tells JS to log or print out output to the screen where we can see it
