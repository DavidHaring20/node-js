// creates a function which is called myFirstFunction and returns a greeting

console.log(myFirstFunction());

function myFirstFunction() {
    return "Hello World.";
}

function sayHiLater(anyFunctionReference) {
    // simulate some code running 
    // ... 5 seconds later 
    anyFunctionReference();
}

const sayHi = () => {
    console.log("Hi");
}

// call sayHiLater and pass a callback that says "Hi"
sayHiLater(sayHi);

const sayHello = () => {
    console.log("Hello");
}

// do the same but this time it should say "Hello"
sayHiLater(sayHello);

// interact with functions and string 
function interact(genericFunction, name) {
    console.log(genericFunction(name));
}

// for example, try "poke" someone
const nameOfPerson = "Johny";

const poke = (nameOfPerson) => {
    return "Poke " + nameOfPerson ;
}

interact(poke, nameOfPerson);

// call interact and in single line make sure following is achieved
// for example, try "lick" someone  

interact(name => "Lick " + name, "Biden");