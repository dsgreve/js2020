// KEYWORD 'THIS'
// this; reference to current execution scope.

function sayHi() {
  console.log("HI")
  console.log(this); // refers to current execution scope, when in this function refers to Window
}

var color = "teal" // adds to Window in global scope
let num = 400 // let and const do not add to global scope
const myhat = 'fedora'