// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObj = {
    "message": "Hello, earthling! I bring peace."
};

// Log the message 

console.log("Exercise 1");
console.log(myObj.message);
console.log();

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

console.log("Exercise 2");
const myObject = {
    "name" : "David",
    "age" : 20
}
console.log("I am " + myObject.name + " and I am " + myObject.age + " years old.");
console.log();

// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {};

// make a rule called isAllowed and let the value be true

console.log("Exercise 3");
stackOverflow.isAllowed = true;
console.log(stackOverflow.isAllowed);
console.log();

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {
    "description": "The best song in the world."
}

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

console.log("Exercise 4");
delete thisSong.description;
console.log(thisSong.description);
console.log();

// --------------------------------------