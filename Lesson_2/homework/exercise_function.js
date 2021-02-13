// THIS IS A PROOF OF HOISTING
console.log(sayHello() + " This is the proof that functions are hoisted. ")

// CREATE A SIMPLE FUNCTION WHICH RETURNS A "Hello World"
function sayHello() {
    return "Hello World !";
}

console.log(sayHello());

// THIS IS THE FUNCTION WHICH TAKES ANOTHER FUNCTION AS ARGUMENT => CALLBACK
// "Callback is a function passed as an argument to another function. This technique allows one function 
// to call another function. A callback function can run when the other function is finished."
function iAmCallbackFunction(anyFunction) {
    console.log("We are executing code. Please wait couple of seconds.");
    setTimeout(() => anyFunction(), 3000);
}  

// // INSTANTIATE EXPERIMENTAL FUNCTION WHICH WILL BE CALLED INSIDE CALLBACK FUNCTION
const experiment = () => {
    console.log( "Hello from \"experiment\" method. I am being call-backed.");
}

// // THIS IS A CALL FOR OUR CALLBACK METHOD
iAmCallbackFunction(experiment);

// NOW WE WILL TRY TO HAVE CALLBACK FUNCTIONS WHICH CAN INTERACT WITH SOME VARIABLES
// INSTANTIATE SOME VARIABLE WHERE WE WILL STORE OUR OUTPUT FROM THE METHOD
var result;
var outputBeforeResult = "Your result is: ";

// INSTANTIATE SOME FUNCTION
const sumTwoNumbers = (x, y) => {
    result = x + y;
    return result;
}

// INSTANTIATE CALLBACK FUNCTION 
function callbackToSumOfTwoNumbers(text, mathMethod) {
    console.log(text, mathMethod);
}

callbackToSumOfTwoNumbers(outputBeforeResult, sumTwoNumbers(5, 2));

// WE NEED TO INITIALIZE THE CALLBACK METHOD 
var number1 = 5;
var number2 = 2;
var number3 = 3;

const multiply = (x, y) => {
    return x * y;
}

const deduct = (x, y) => {
    return x - y;
}

function checkIfEven(mathFunction) {
    if (mathFunction % 2 == 0) {
        console.log("I am even: " + mathFunction);
    } else {
        console.log("Odd, James odd: " + mathFunction);
    }
}

// MULTIPLICATION
checkIfEven(multiply(number1, number2));
checkIfEven(multiply(number2, number3));
checkIfEven(multiply(number1, number3));

// DEDUCTION
checkIfEven(deduct(number1, number2));
checkIfEven(deduct(number2, number3));
checkIfEven(deduct(number1, number3));