// JS Functions Are First Class Citizens
// Values can be stored in variables and passed into other functions
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anon function 
// function (firstName) {
//   return `Dr. ${firstName}`;
// }
//Function Expression - store a function as a value in a variable
const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
}

// functions that are declared are "hoisted" to the top so functions can be run before its defined in the code
// it does not hoist function expressions
console.log(doctorize2('Scott'))
function doctorize2 (firstName) {
  return `Dr. ${firstName}`;
}

doctorize('Scott');
console.log(doctorize('Scott'))

// arrow functions, newer - concise syntax, don't have there own scope for this keyword

function inchToCm(inches) {
  const cm = inches * 2.54;
  return cm;
}
// => called a fat arrow vs -> skinny arrow
// if only 1 parameter you can remove the parentheses
const inchToCmTwo = inches => inches * 2.54;

function add(a, b = 3) {
  const total = a + b;
  return total;
}

const addTwo = (a, b = 3) => total = a + b;

// return an object

const makeABaby = (firstName, lastName) => {
  const baby = {
    name: `${firstName} ${lastName}`,
    age: 0
  }
  return baby;
}

// IIFE
// Immediately Invoked Function Expression

(function() {
  console.log('Running anon function');
  return 'You Are Cool!';
})();

// Methods - functions that live in an object

const wes = {
  name: 'Wes Bos',
  // Method
  sayHi: function() {
    console.log(`Hey ${this.name}`);
    return 'Hey Wes'
  },

   // Short Hand Method
  yellHi() {
    console.log('HEY WESSSSS');
    return 'Hey Wes'
  },

  // arrow fuction
  whisperHi: () => {
    console.log('hi quiet')
  }
}
// this is the method
wes.sayHi();
wes.yellHi();
wes.whisperHi();

// Callback functions
// funtion added into another function to be used later
// click call back
const btn = document.querySelector('.clickMe');

function handleClick() {
  console.log('Great Click')
}
btn.addEventListener('click', handleClick);
btn.addEventListener('click', function() {
  console.log('Click of the day!')
});


// timer call bacl
setTimeout(wes.whisperHi, 1500);
setTimeout(function(){console.log('Done, time to eat')}, 2500);