// Hoisting (only works with regular functions)- access functions and variables before they are created.
// some people like to see what the file does so calling functions at top make it quick to see and then scroll down to see where the function is declared


// variable declerations will be hoisted but not ther values
console.log(age); // undefined
// console.log(cool); -> undeclared
var age = 10;

// functions are hoisted
sayHi();
function sayHi() {
  console.log('it lives');
  console.log(addTwo(4,6));
}


function addTwo(a,b) {
  return a + b;
   
}