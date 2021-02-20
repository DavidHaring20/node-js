// "use strict";

// THIS IS VERY BAD VARIABLE DECLARATION  
// myGlobalVariable = "I work until you turn on \"strict mode\".";

// THIS IS BETTER VARIABLE DECLARATION 
var betterVariableDeclaration = "I work every time.";

// console.log(myGlobalVariable);
console.log(betterVariableDeclaration);

// OBJECT IMMUTABILITY 
// BY USING THE "Object.freeze", WE CAN STOP OUR OBJECT FROM CHANGING THE ORIGINAL ATTRIBUTES 
const myConstObject = Object.freeze({
    attribute: "value"
});

myConstObject.attribute = "changedValue";

console.log(myConstObject.attribute);

let variableA;
let variableB;

// TYPE COERCION 
// THIS ONE WILL TRY TO SUM THE VALUE OF VARIABLE A AND VARIABLE B, BUT BECAUSE THEY ARE NOT NUMBERS, WE GET "NaN"
console.log(variableA + variableB);
// THIS ONE WILL TRY TO SHOW VARIABLE A AND THEN VARIABLE B, BUT BECAUSE THEY ARE NOT DEFINED, WE WILL GET "undefined""undefined"
console.log(variableA, variableB);

let variable1 = "abc";
{
    let variable1 = 123;
    // console.log(variable1);
}
console.log(variable1);

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        // this code will run after 1 second
        console.log(i);
    }, 1000);
}