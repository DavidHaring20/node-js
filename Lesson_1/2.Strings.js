// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

console.log("Exercise 3");
const resultEx3 = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(resultEx3);
console.log();

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

console.log("Exercise 4");
const resultEx4 = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);
console.log(resultEx4.toFixed(2));
console.log();

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

console.log("Exercise 5");
const resultEx5 = (one + two + three) / 3;
console.log(resultEx5.toFixed(5));
console.log();

// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log("Exercise 6");
console.log(letters.charAt(2));
console.log();

// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

console.log("Exercise 7");
console.log(fact.replace('j', 'J'));

// --------------------------------------