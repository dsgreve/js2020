// fu-fu-functions
/**
 * Functions are Reusable procedures that
 * allow us to write reusable code
 * Define a chunk of code that we can execute at a later point
 * * 2 Step process 1. Define function 2. Execute or Run the function
 * Methods are functions (built in methods .toUpperCase() .lenth() )
 * Define
 * function funcName() {
 *  //do something
 * }
function grumpus() {
  console.log('Knock Knock')
  console.log("Who's there?")
  console.log('Nobel')
  console.log('Nobel Who?')
  console.log('Nobel... thats why I knocked')
}

for (let i = 0; i < 100; i++) {
  grumpus()
}
Fuctions can be called in loops, other functions, anywhere

Functions can hold arguements that allow for an input to set different outputs
Pass in an arguement passes in an input
If nothing is passed in, js will just leave it as undefined
 *
 *
 */

function rollDie(el) {
  const roll = Math.floor(Math.random() * el) + 1
  console.log(`Rolled: ${roll}`)
}

function throwDice(numRolls) {
  for (let i = 0; i < numRolls; i++) {
    rollDie(10)
  }
}

throwDice(3)

function greet(nickname) {
  console.log(`Hi, ${nickname}`)
}

greet(['Booger', 'Updog', 'Lazy Bone'])

// first instance of num in paratheses is called a parameter
function square(num) {
  console.log(num * num)
}

// 4 is an arguement
square(4)

// multiple parameters
function sum(x, y) {
  console.log(x + y)
}

sum(3, 4)

const scream = 'hello'.toUpperCase()

// return values can be captured in a variable or passed to a function

function add(x, y) {
  return x + y
}

// you can not return 2 seperate values.  
// code added after a return in a function will not be run
// whenever js runs into a return in a function it is done with the function if the return is executed
// it will run in an if statement 
/** 
function isPurple(color) {
  if (color.toLowerCase() === 'purple') {
    return true;
    //console.log('Yay!') // is unreachable
  } else {
    console.log('BOO!') //will run
    return false;
  }
}
 **/
// shorter version 
/*
function isPurple(color) {
  if (color.toLowerCase() === 'purple') {
    return true;
    //console.log('Yay!') // is unreachable
  }
  console.log('BOO!') //will run
  return false;
}
*/

// Even shorter - boolean expression

function isPurple(color) {
  return color.toLowerCase() === 'purple'
}

// contains purple
function containsPurple(arr) {
  for (let color of arr) {
    if (color.toLowerCase() === 'purple' || color.toLowerCase() === 'magenta' || color.toLowerCase() === 'lilac') {
      return true;
    }
  }
  return false;
}


// Function expressions
// function is stored in a variable - it works because functions are objects.  This means we can pass them around, store them, etc.

// function add(x, y) {
//   return x + y;
// }

// const sum = function (x, y) {
//   return x + y;
// }

// const product = function multiply(x, y) {
//   return x * y;
// }

// functions stored in array
function add(x, y) {
  return x + y;
}

const subtract = function (x, y) {
  return x - y;
}
const multiply = function (x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

const operations = [add, subtract, multiply, divide];

//console.log(operations[0](100, 5))

for (let func of operations) {
  let result = func(20, 5);
  console.log(result)
}

// by adding a function to an object we create a method
const thing = {
  doSomething: multiply
}